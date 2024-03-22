import allProduct from '../dataStatik/Product.json';

export const getFilterProduct = (Filter1, value1, Filter2, value2) => {
  const filteredProducts = allProduct.data.product.filter(
    item => item[Filter1] === value1 && item[Filter2] === value2,
  );
  return filteredProducts;
};
