const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Temple API',
    description: 'API documentation for the Temple API',
  },
  host: 'localhost:8080',
  schemes: ['http'],

  securityDefinitions: {
    apiKeyAuth: {
      type: 'apiKey',
      in: 'header',
      name: 'apiKey',
      description: 'Enter your API Key',
    },
  },
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);