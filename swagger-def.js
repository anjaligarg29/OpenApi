const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/productRoutes.js', './routes/userRoutes.js'];

swaggerAutogen(outputFile, endpointsFiles);
