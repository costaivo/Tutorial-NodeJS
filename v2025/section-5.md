# Section 5: Implementing Validations

This section covers request validation using Joi and custom middleware implementation.

### 5.1 Installing Dependencies

```bash
pnpm add joi
```

### 5.2 Creating Validation Schemas

Create `src/validations/quoteValidations.js`:

```javascript
const Joi = require('joi');

const quoteValidations = {
    createQuote: Joi.object({
        text: Joi.string().required().min(3).max(500)
            .messages({
                'string.empty': 'Quote text cannot be empty',
                'string.min': 'Quote text must be at least 3 characters long',
                'string.max': 'Quote text cannot exceed 500 characters'
            }),
        author_name: Joi.string().required().min(2).max(100)
            .messages({
                'string.empty': 'Author name cannot be empty',
                'string.min': 'Author name must be at least 2 characters long',
                'string.max': 'Author name cannot exceed 100 characters'
            }),
        tags: Joi.array().items(Joi.string().trim()).min(1)
            .messages({
                'array.min': 'At least one tag is required'
            })
    }),

    updateQuote: Joi.object({
        text: Joi.string().min(3).max(500),
        author_name: Joi.string().min(2).max(100),
        tags: Joi.array().items(Joi.string().trim())
    })
};

module.exports = quoteValidations;
```

### 5.3 Creating Validation Middleware

Create `src/middleware/validateRequest.js`:

```javascript
const validateRequest = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        
        if (error) {
            const errors = error.details.map(detail => ({
                field: detail.path[0],
                message: detail.message
            }));
            
            return res.status(400).json({
                message: 'Validation failed',
                errors
            });
        }
        
        next();
    };
};

module.exports = validateRequest;
```

### 5.4 Creating Error Handler Middleware

Create `src/middleware/errorHandler.js`:

```javascript
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    if (err.name === 'ValidationError') {
        return res.status(400).json({
            message: 'Validation Error',
            errors: Object.values(err.errors).map(error => ({
                field: error.path,
                message: error.message
            }))
        });
    }

    if (err.name === 'CastError') {
        return res.status(400).json({
            message: 'Invalid ID format'
        });
    }

    res.status(500).json({
        message: 'Internal Server Error'
    });
};

module.exports = errorHandler;
```

### 5.5 Implementing the Middleware

Update `src/server.js`:

```javascript
const express = require('express');
const connectDB = require('./config/database');
const quoteController = require('./controllers/quoteController');
const authorController = require('./controllers/authorController');
const validateRequest = require('./middleware/validateRequest');
const errorHandler = require('./middleware/errorHandler');
const quoteValidations = require('./validations/quoteValidations');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Connect to MongoDB
connectDB();

// Quote routes with validation
app.get('/quotes', quoteController.getAllQuotes);
app.get('/quotes/:id', quoteController.getQuoteById);
app.post('/quotes', 
    validateRequest(quoteValidations.createQuote),
    quoteController.createQuote
);
app.put('/quotes/:id', 
    validateRequest(quoteValidations.updateQuote),
    quoteController.updateQuote
);
app.delete('/quotes/:id', quoteController.deleteQuote);
app.post('/quotes/:id/like', quoteController.likeQuote);
app.post('/quotes/:id/dislike', quoteController.dislikeQuote);

// Author routes
app.get('/authors', authorController.getAllAuthors);

// Error handler middleware (should be last)
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
```

### 5.6 Testing Validation

1. Test with invalid data:
```bash
curl -X POST http://localhost:3000/quotes \
  -H "Content-Type: application/json" \
  -d '{"text": "a", "author_name": "b"}'
```

Expected response:
```json
{
    "message": "Validation failed",
    "errors": [
        {
            "field": "text",
            "message": "Quote text must be at least 3 characters long"
        },
        {
            "field": "author_name",
            "message": "Author name must be at least 2 characters long"
        },
        {
            "field": "tags",
            "message": "At least one tag is required"
        }
    ]
}
```

2. Test with valid data:
```bash
curl -X POST http://localhost:3000/quotes \
  -H "Content-Type: application/json" \
  -d '{"text": "Life is what happens while you are busy making other plans.", "author_name": "John Lennon", "tags": ["life", "planning"]}'
```

### What We've Learned
- Setting up Joi validation schemas
- Creating custom validation middleware
- Implementing error handling middleware
- Proper error response formatting
- Testing validation scenarios 