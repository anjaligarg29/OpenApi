const express = require('express');
const sequelize = require('./config/db');
const productRoutes = require('./routes/productRoutes'); 
const userRoutes = require('./routes/userRoutes');
const swaggerSetup = require('./swagger/swagger');
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger-output.json');
const app = express();
const port = 8000;

app.use(express.json());
sequelize.sync()
    .then(() => {
        console.log('connection done');
    })
    .catch(error => {
        console.error('connection not done:', error);
    });

app.use('/products', productRoutes);
app.use('/user',userRoutes);

swaggerSetup(app);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
