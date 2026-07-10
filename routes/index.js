const routes = require('express').Router();
const temple = require('./temple');

// Temple routes
routes.use('/temples', temple);

// Home route
routes.get('/', (req, res) => {
  res.json({
    documentationURL: '/api-docs'
  });
});

module.exports = routes;