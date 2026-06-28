function calculateTotal(items) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

function getProductById(products, id) {
  return products.find((product) => product.id === id) || null;
}

module.exports = {
  calculateTotal,
  getProductById,
};
