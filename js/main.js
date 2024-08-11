import { renderProduct } from './modules/addProducts.js';
import products from './products.js';

window.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.querySelector('.js-product-list');
    renderProduct(products, productContainer);
});
