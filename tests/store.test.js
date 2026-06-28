const test = require('node:test');
const assert = require('node:assert/strict');
const { calculateTotal, getProductById } = require('../src/store');

test('calcula el total del carrito', () => {
  const items = [
    { price: 10, quantity: 2 },
    { price: 5, quantity: 3 },
  ];

  assert.equal(calculateTotal(items), 35);
});

test('devuelve un producto por id cuando existe', () => {
  const products = [
    { id: 1, name: 'Camiseta' },
    { id: 2, name: 'Mochila' },
  ];

  assert.deepEqual(getProductById(products, 2), { id: 2, name: 'Mochila' });
});

test('retorna null cuando no existe el producto', () => {
  const products = [{ id: 1, name: 'Camiseta' }];

  assert.equal(getProductById(products, 99), null);
});
