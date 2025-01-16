// Import the express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Make the server listen on port 3000
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000/');
});
