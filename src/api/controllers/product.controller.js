const Product = require('../models/product.model');
const {productValidator} = require('../validators/product.validator');

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
    const product = new Product({ ...req.body });
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
    const product = await Product.find();
  res.json({ product });
};

//get first search product
const getoneProduct = async(req, res) => {
    const product = await Product.findOne({ name: req.params.name });
  res.json({ product });
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

module.exports = {
    createProduct,
    getallProduct,
    getoneProduct,
    updateProduct,
    deleteProduct,
}