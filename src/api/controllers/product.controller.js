//const Product = require('../models/product.model');
import {Product} from "../models/product.model.js";
//const {productValidator} = require('../validators/product.validator');
import {productValidator} from "../validators/product.validator.js";

//create
const createProduct = async(req, res) => {
    try{
        //validate before creating product using joi
    const {error} = productValidator(req.body);
    if(error) {
      return res.status(401).json({
        //msg: error.details[0].message,
        msg: error,
      })
    }

    //create kitty
    const product = new Product({ ...req.body, user: req.user.id });
    const saveProduct = await product.save();
    
    return res.status(401).json({
      msg: "Product created successfully",
      item: saveProduct,
    });

    }catch (error) {
        console.log(error);
    }

};

//get all product
const getallProduct = async(req, res) => {
    try {
      const product = await Product.find().sort({price: 1});
      if(product === 0) {
        return res.status(200).json({
          status: "success",
          msg: "There are no products"
        });
      }
      res.json(product);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
};

//get first search product
const getoneProduct = async(req, res) => {
  try {
    const product = await Product.findOne({ name: req.params.name });
    if(product===0) {
      return res.status(200).json({
        status: "success",
        msg: "There is no product of such"
      })
    }
    res.json( product );
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

//querying and filtering products
const filterProduct = async(req, res) => {
  try {
    //query for name: input the query expression
    const query = {name: /biscuit/i};

    //query for category: input the query expression
    //const query = {category: /junks/i};

    const products = await Product.find(query).sort({price: 1});
    if(products.length === 0) {
      return res.status(200).json({
        status: "success",
        msg: "There are no products",
      });
    };

    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

//update product
const updateProduct = async(req, res) => {
    try {
        const product = await Product.findOne({ name: req.params.name });
    
        if (!product) {
          return res.status(404).json({
            message: 'Product not found',
          });
        }
    
        product.name = req.body.name;
        await product.save();
    
        res.json({
          message: 'Product name was updated',
          product,
        });
      } catch (error) {
        console.log(error);
      }
};

//delete product
const deleteProduct = async(req, res) =>{
    try {
        const product = await Product.findOneAndDelete({ name: req.params.name });
    
        if (!product) {
          return res.status(404).json({
            message: 'Product not found',
          });
        }
    
        res.json({
          message: 'Product was deleted',
        });
      } catch (error) {
        console.log(error);
      }
};

export default {
    createProduct,
    getallProduct,
    getoneProduct,
    updateProduct,
    deleteProduct,
    filterProduct,
}