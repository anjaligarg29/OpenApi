const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'mssql',
    server: 'LAPTOP-0P480HVL\\SQL2022',
    database: 'testdb',
    username: 'sa',
    password: 'isha123',
    dialectOptions: {
      options: {
        encrypt: true, 
      },
    },
  });
  
  module.exports = sequelize;