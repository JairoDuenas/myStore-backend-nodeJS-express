const express = require('express');

const router = express.Router();

router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  });
});

router.patch('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    categoryId,
    productId,
  });
});

router.delete('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    message: 'deleted',
    categoryId,
    productId,
  });
});

module.exports = router;
