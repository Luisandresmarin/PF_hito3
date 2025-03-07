const express = require('express');
const authenticateToken = require('../middlewares/authMiddleware');
const { getProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

const router = express.Router();

router.get('/', getProducts);
router.post('/', authenticateToken(['admin']), createProduct);
router.put('/:id_producto', authenticateToken(['admin']), updateProduct);
router.delete('/:id_producto', authenticateToken(['admin']), deleteProduct); 

module.exports = router;

