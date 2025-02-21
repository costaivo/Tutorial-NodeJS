# Section 4: Using Mongoose

This section covers creating and implementing Mongoose models for our Quote application.

### 4.1 Creating the Quote Model

Create `src/models/Quote.js`:

```javascript
const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true
    },
    author_name: {
        type: String,
        required: true,
        trim: true
    },
    tags: [{
        type: String,
        trim: true
    }],
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

// Add index for better search performance
quoteSchema.index({ author_name: 1 });
quoteSchema.index({ tags: 1 });

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;
```

### 4.2 Updating the Quote Controller

Update `src/controllers/quoteController.js`:

```javascript
const Quote = require('../models/Quote');

const quoteController = {
    // Get all quotes
    getAllQuotes: async (req, res) => {
        try {
            const quotes = await Quote.find();
            res.status(200).json(quotes);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching quotes', error: error.message });
        }
    },

    // Get quote by ID
    getQuoteById: async (req, res) => {
        try {
            const quote = await Quote.findById(req.params.id);
            if (!quote) {
                return res.status(404).json({ message: 'Quote not found' });
            }
            res.status(200).json(quote);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching quote', error: error.message });
        }
    },

    // Create new quote
    createQuote: async (req, res) => {
        try {
            const quote = new Quote(req.body);
            await quote.save();
            res.status(201).json(quote);
        } catch (error) {
            res.status(400).json({ message: 'Error creating quote', error: error.message });
        }
    },

    // Update quote
    updateQuote: async (req, res) => {
        try {
            const quote = await Quote.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true, runValidators: true }
            );
            if (!quote) {
                return res.status(404).json({ message: 'Quote not found' });
            }
            res.status(200).json(quote);
        } catch (error) {
            res.status(400).json({ message: 'Error updating quote', error: error.message });
        }
    },

    // Delete quote
    deleteQuote: async (req, res) => {
        try {
            const quote = await Quote.findByIdAndDelete(req.params.id);
            if (!quote) {
                return res.status(404).json({ message: 'Quote not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting quote', error: error.message });
        }
    },

    // Like a quote
    likeQuote: async (req, res) => {
        try {
            const quote = await Quote.findByIdAndUpdate(
                req.params.id,
                { $inc: { likes: 1 } },
                { new: true }
            );
            if (!quote) {
                return res.status(404).json({ message: 'Quote not found' });
            }
            res.status(200).json(quote);
        } catch (error) {
            res.status(500).json({ message: 'Error liking quote', error: error.message });
        }
    },

    // Dislike a quote
    dislikeQuote: async (req, res) => {
        try {
            const quote = await Quote.findByIdAndUpdate(
                req.params.id,
                { $inc: { dislikes: 1 } },
                { new: true }
            );
            if (!quote) {
                return res.status(404).json({ message: 'Quote not found' });
            }
            res.status(200).json(quote);
        } catch (error) {
            res.status(500).json({ message: 'Error disliking quote', error: error.message });
        }
    }
};

module.exports = quoteController;
```

### 4.3 Updating the Author Controller

Update `src/controllers/authorController.js`:

```javascript
const Quote = require('../models/Quote');

const authorController = {
    // Get all unique authors
    getAllAuthors: async (req, res) => {
        try {
            const authors = await Quote.distinct('author_name');
            res.status(200).json(authors);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching authors', error: error.message });
        }
    }
};

module.exports = authorController;
```

### 4.4 Adding New Routes

Update `src/server.js` to include the new like/dislike routes:

```javascript
// ... existing imports and setup ...

// Quote routes
app.get('/quotes', quoteController.getAllQuotes);
app.get('/quotes/:id', quoteController.getQuoteById);
app.post('/quotes', quoteController.createQuote);
app.put('/quotes/:id', quoteController.updateQuote);
app.delete('/quotes/:id', quoteController.deleteQuote);
app.post('/quotes/:id/like', quoteController.likeQuote);
app.post('/quotes/:id/dislike', quoteController.dislikeQuote);

// ... rest of the file ...
```

### 4.5 Testing the Updated Endpoints

1. Create a new quote:
```bash
curl -X POST http://localhost:3000/quotes \
  -H "Content-Type: application/json" \
  -d '{"text": "Stay hungry, stay foolish.", "author_name": "Steve Jobs", "tags": ["inspiration", "success"]}'
```

2. Like a quote:
```bash
curl -X POST http://localhost:3000/quotes/[quote_id]/like
```

3. Dislike a quote:
```bash
curl -X POST http://localhost:3000/quotes/[quote_id]/dislike
```

### What We've Learned
- Creating Mongoose models with schemas
- Implementing CRUD operations using Mongoose
- Adding custom endpoints (like/dislike)
- Using Mongoose middleware and hooks
- Error handling in async/await functions 