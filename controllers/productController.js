const sequelize = require('../config/db');
const { Op } = require('sequelize');
const Product = require('../models/productModel');

class ProductController {
  async getAllProducts(req, res) {
    try {
      const { name, price } = req.query;
      
      const searchCriteria = {};
      
      if (name) {
        console.log(name);
        searchCriteria.name = {
           [Op.like]: `%${name}%`,
        };
      }
      
      if (price !== undefined) {
        searchCriteria.price = price;
      }
      const products = await Product.findAll({
        where: searchCriteria,
      });
      
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  

  async getProductById(req, res) {
    try {
      const id = req.params.id;
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async createProduct(req, res) {
    try {
      const newProduct = req.body;
      const createdProduct = await Product.create(newProduct);
      res.status(201).json(createdProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async updateProduct(req, res) {
    try {
      const id = req.params.id;
      const updatedProduct = req.body;
      const result = await Product.update(updatedProduct, {
        where: { id },
      });
      if (result[0] > 0) {
        res.json({ message: 'Product updated successfully' });
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async deleteProduct(req, res) {
    try {
      const id = req.params.id;
      const result = await Product.destroy({
        where: { id },
      });
      if (result > 0) {
        res.json({ message: 'Product deleted successfully' });
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = ProductController;
