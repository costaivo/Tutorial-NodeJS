# Section 3: Integrating MongoDB

This section covers setting up MongoDB using Docker and connecting it to our Quote Application.

### 3.1 Setting up Docker Environment

1. Install Docker and Docker Compose if you haven't already:
- [Docker Installation Guide](https://docs.docker.com/get-docker/)
- [Docker Compose Installation Guide](https://docs.docker.com/compose/install/)

2. Create `docker-compose.yml` in your project root:

```yaml
version: '3.8'
services:
  mongodb:
    image: mongo:latest
    container_name: mongodb
    restart: always
    ports:
      - "27017:27017"
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example
    volumes:
      - mongodb_data:/data/db

  mongo-express:
    image: mongo-express:latest
    container_name: mongo-express
    restart: always
    ports:
      - "8081:8081"
    environment:
      ME_CONFIG_MONGODB_ADMINUSERNAME: root
      ME_CONFIG_MONGODB_ADMINPASSWORD: example
      ME_CONFIG_MONGODB_URL: mongodb://root:example@mongodb:27017/
    depends_on:
      - mongodb

volumes:
  mongodb_data:
```

### 3.2 Managing Docker Containers

1. Start the containers:

```bash
docker-compose up -d
```

2. Check container status:

```bash
docker-compose ps
```

3. Stop the containers:

```bash
docker-compose down
```

4. View container logs:

```bash
# View MongoDB logs
docker-compose logs mongodb

# View Mongo Express logs
docker-compose logs mongo-express
```

### 3.3 Accessing Mongo Express

1. Open your browser and navigate to:
   - URL: <http://localhost:8081>
   - This provides a web interface to manage your MongoDB databases

2. Create a new database:
   - Click "Create Database"
   - Database Name: `quotes_db`
   - Collection Name: `quotes`

### 3.4 Connecting to MongoDB

1. Install required dependencies:

```bash
pnpm add mongoose dotenv
```

2. Create `.env` file in your project root:

```env
MONGODB_URI=mongodb://root:example@localhost:27017/quotes_db?authSource=admin
PORT=3000
```

3. Create `src/config/database.js`:

```javascript
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
```

4. Update `src/server.js` to include database connection:

```javascript
const express = require('express');
const connectDB = require('./config/database');
const quoteController = require('./controllers/quoteController');
const authorController = require('./controllers/authorController');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Connect to MongoDB
connectDB();

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

### 3.5 Testing the Connection

1. Start the MongoDB containers:

```bash
docker-compose up -d
```

2. Start your Node.js application:

```bash
node src/server.js
```

You should see the message: "MongoDB connected successfully"

### What We've Learned

- Setting up MongoDB using Docker Compose
- Managing Docker containers
- Using Mongo Express for database management
- Connecting Node.js application to MongoDB
- Environment configuration using dotenv

### Common Issues and Solutions

1. Connection refused error:
   - Ensure Docker containers are running
   - Check if the MongoDB port (27017) is not in use
   - Verify the connection string in .env file

2. Authentication failed:
   - Verify username and password in connection string
   - Check if authSource is properly set

3. Docker container not starting:
   - Check if ports 27017 and 8081 are available
   - Verify Docker service is running
   - Check Docker logs for specific errors

### Next Steps

In the next section, we'll:
- Create a Mongoose schema for our Quote model
- Update our controllers to use MongoDB instead of in-memory array
- Implement proper error handling for database operations 