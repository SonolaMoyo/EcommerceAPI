const router = require('express').Router();
const ProductController = require('../controllers/product.controller');

router.post('/', ProductController.createProduct);
router.get('/', ProductController.getallProduct);
router.get('/:name', ProductController.getoneProduct);
router.put('/:name', ProductController.updateProduct);
router.delete('/:name', ProductController.deleteProduct);

module.exports = router;