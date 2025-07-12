// services/productService.js

exports.getAllProducts = () => {
  // You can later fetch from DB. For now, just return a message.
  return "Fetching all products";
};

exports.getProductById = (id) => {
  return `Fetching product with ID: ${id}`;
};

exports.addProduct = () => {
  return "Adding a new product";
};
