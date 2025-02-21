# Section 1: Getting Started with NodeJS and ExpressJS

This section covers the basics of setting up a NodeJS project and creating simple REST API endpoints using ExpressJS.

### 1.1 Project Setup

1. Create a new project directory:

```bash
mkdir rest-api-tutorial
cd rest-api-tutorial
```

1. Initialize a new NodeJS project:

```bash
pnpm init
```

1. Install ExpressJS:

```bash
pnpm add express
```

### 1.2 Project Structure

```bash
rest-api-tutorial/
├── src/
│   ├── controllers/
│   │   └── helloController.js
│   └── server.js
└── package.json
```

### 1.3 Creating Your First Controller

Create `src/controllers/helloController.js`:

```javascript
const helloController = {
    getHello: (req, res) => {
        res.status(200).json({ message: 'Hello GET Method!' });
    },
    
    postHello: (req, res) => {
        res.status(201).json({ message: 'Hello POST Method!' });
    },
    
    putHello: (req, res) => {
        res.status(200).json({ message: 'Hello PUT Method!' });
    },
    
    patchHello: (req, res) => {
        res.status(200).json({ message: 'Hello PATCH Method!' });
    },
    
    deleteHello: (req, res) => {
        res.status(200).json({ message: 'Hello DELETE Method!' });
    }
};

module.exports = helloController;
```

### 1.4 Setting up the Express Server

Create `src/server.js`:

```javascript
const express = require('express');
const helloController = require('./controllers/helloController');

const app = express();
const port = 3000;

// Routes
app.get('/', helloController.getHello);
app.post('/', helloController.postHello);
app.put('/', helloController.putHello);
app.patch('/', helloController.patchHello);
app.delete('/', helloController.deleteHello);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
```

### 1.5 Testing the API Endpoints

You can test the endpoints using cURL:

1. GET Request:

```bash
curl http://localhost:3000
```

Expected response: `{"message":"Hello GET Method!"}`

1. POST Request:

```bash
curl -X POST http://localhost:3000
```

Expected response: `{"message":"Hello POST Method!"}`

1. PUT Request:

```bash
curl -X PUT http://localhost:3000
```

Expected response: `{"message":"Hello PUT Method!"}`

4. PATCH Request:

```bash
curl -X PATCH http://localhost:3000
```

Expected response: `{"message":"Hello PATCH Method!"}`

5. DELETE Request:

```bash
curl -X DELETE http://localhost:3000
```

Expected response: `{"message":"Hello DELETE Method!"}`

### 1.6 Understanding HTTP Status Codes Used

- `200`: Success (Used for GET, PUT, PATCH, DELETE)
- `201`: Created (Used for POST)

### Running the Project

1. Install dependencies:

```bash
pnpm install
```

2. Start the server:

```bash
node src/server.js
```

The server will start running on <http://localhost:3000>

### What We've Learned

- Setting up a NodeJS project with PNPM
- Creating a basic Express server
- Implementing a controller with different HTTP methods
- Understanding basic HTTP status codes
- Testing API endpoints using cURL 