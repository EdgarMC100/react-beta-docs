const findProductCategories = (products) => {
  let categories = [];
  products.forEach((product) => {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
  });
  return categories;
};

const orderProductsByCategory = (products, categories) => {
  let categoryProducts = {};
  let orderedProducts = [];
  categories.forEach((category) => (categoryProducts[category] = []));
  products.forEach((product) => {
    categories.forEach((category) => {
      if (category == product.category) {
        categoryProducts[product.category].push(product);
      }
    });
  });
  for (const [key, value] of Object.entries(categoryProducts)) {
    orderedProducts.push(...value);
  }
  return orderedProducts;
};
export { findProductCategories, orderProductsByCategory };
