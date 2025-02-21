# Section 2: Introduction to Quote Application

This section introduces the Quote Application structure and implements in-memory CRUD operations using a hardcoded array of quotes.

### 2.1 Project Setup

1. Create a new project directory:

```bash
mkdir quotes-app
cd quotes-app
```

1. Initialize a new NodeJS project:

```bash
pnpm init
```

1. Install ExpressJS:

```bash
pnpm add express
```

### 2.2 Project Structure

```bash
quotes-app/
├── src/
│   ├── controllers/
│   │   ├── quoteController.js
│   │   └── authorController.js
│   ├── data/
│   │   └── quotes.js
│   └── server.js
└── package.json
```

### 2.3 Setting up the Mock Data

Create `src/data/quotes.js`:

```javascript
const quotes = [
    {
        _id: "1",
        text: "Be yourself; everyone else is already taken.",
        author_name: "Oscar Wilde",
        tags: ["inspiration", "authenticity"]
    },
    {
        _id: "2",
        text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author_name: "Albert Einstein",
        tags: ["humor", "science"]
    },
    {
        _id: "3",
        text: "Be the change that you wish to see in the world.",
        author_name: "Mahatma Gandhi",
        tags: ["inspiration", "change"]
    }
];

module.exports = quotes;
```

### 2.4 Creating the Quote Controller

Create `src/controllers/quoteController.js`:

```javascript
const quotes = require('../data/quotes');

const quoteController = {
    // Get all quotes
    getAllQuotes: (req, res) => {
        res.status(200).json(quotes);
    },

    // Get quote by ID
    getQuoteById: (req, res) => {
        const quote = quotes.find(q => q._id === req.params.id);
        if (!quote) {
            return res.status(404).json({ message: 'Quote not found' });
        }
        res.status(200).json(quote);
    },

    // Create new quote
    createQuote: (req, res) => {
        const newQuote = {
            _id: (quotes.length + 1).toString(),
            ...req.body
        };
        quotes.push(newQuote);
        res.status(201).json(newQuote);
    },

    // Update quote
    updateQuote: (req, res) => {
        const index = quotes.findIndex(q => q._id === req.params.id);
        if (index === -1) {
            return res.status(404).json({ message: 'Quote not found' });
        }
        quotes[index] = { ...quotes[index], ...req.body };
        res.status(200).json(quotes[index]);
    },

    // Delete quote
    deleteQuote: (req, res) => {
        const index = quotes.findIndex(q => q._id === req.params.id);
        if (index === -1) {
            return res.status(404).json({ message: 'Quote not found' });
        }
        quotes.splice(index, 1);
        res.status(204).send();
    }
};

module.exports = quoteController;
```

### 2.5 Creating the Author Controller

Create `src/controllers/authorController.js`:

```javascript
const quotes = require('../data/quotes');

const authorController = {
    // Get all unique authors
    getAllAuthors: (req, res) => {
        const authors = [...new Set(quotes.map(quote => quote.author_name))];
        res.status(200).json(authors);
    }
};

module.exports = authorController;
```

### 2.6 Setting up the Express Server

Create `src/server.js`:

```javascript
const express = require('express');
const quoteController = require('./controllers/quoteController');
const authorController = require('./controllers/authorController');

const app = express();
const port = 3000;

app.use(express.json());

// Quote routes
app.get('/quotes', quoteController.getAllQuotes);
app.get('/quotes/:id', quoteController.getQuoteById);
app.post('/quotes', quoteController.createQuote);
app.put('/quotes/:id', quoteController.updateQuote);
app.delete('/quotes/:id', quoteController.deleteQuote);

// Author routes
app.get('/authors', authorController.getAllAuthors);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
```

### 2.7 Testing the API Endpoints

1. Get all quotes:

```bash
curl http://localhost:3000/quotes
```

1. Get a specific quote:

```bash
curl http://localhost:3000/quotes/1
```

1. Create a new quote:

```bash
curl -X POST http://localhost:3000/quotes \
  -H "Content-Type: application/json" \
  -d '{"text": "Life is what happens when you're busy making other plans.", "author_name": "John Lennon", "tags": ["life", "planning"]}'
```

1. Update a quote:

```bash
curl -X PUT http://localhost:3000/quotes/1 \
  -H "Content-Type: application/json" \
  -d '{"tags": ["inspiration", "authenticity", "self-improvement"]}'
```

1. Delete a quote:

```bash
curl -X DELETE http://localhost:3000/quotes/1
```

1. Get all authors:

```bash
curl http://localhost:3000/authors
```

### 2.8 Understanding the Quote Model

The Quote model consists of the following fields:

- `_id`: Unique identifier for the quote
- `text`: The actual quote text
- `author_name`: Name of the quote's author
- `tags`: Array of strings representing categories/themes

### Running the Project

1. Install dependencies:

```bash
pnpm install
```

1. Start the server:

```bash
node src/server.js
```

The server will start running on <http://localhost:3000>

### What We've Learned

- Creating a structured API project
- Implementing in-memory CRUD operations
- Working with mock data
- Basic route organization
- Controller separation of concerns
- Handling different HTTP methods with proper status codes
