const Product = require('../models/Product');

const getProducts = async (req, res) => {
  try {
    const products = await Product.getAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ mensaje: 'Producto creado exitosamente', product });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear producto' });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.update(req.params.id_producto, req.body);
    res.json({ mensaje: 'Producto actualizado exitosamente', product });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar producto' });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.delete(req.params.id_producto);
    res.json({ mensaje: 'Producto eliminado exitosamente', product });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar producto' });
  }
};

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };
