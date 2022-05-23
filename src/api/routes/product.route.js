//const router = require('express').Router();
import express from "express";
const router = express.Router();
//const ProductController = require('../controllers/product.controller');
import ProductController from "../controllers/product.controller.js";
import {authorise} from "../middlewares/authorise.js";

router.post('/', authorise,ProductController.createProduct);
router.get('/get', authorise, ProductController.getallProduct);
router.get('/filter', ProductController.filterProduct);
router.get('/:name', ProductController.getoneProduct);
router.put('/:name', ProductController.updateProduct);
router.delete('/:name', ProductController.deleteProduct);

export default router;