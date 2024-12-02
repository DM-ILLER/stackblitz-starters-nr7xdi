import { addToCart, clearCart, processOrder, displayCart, initializeCartModal } from './cart.js';
import { initializeForms } from './forms.js';

// Initialize cart functionality
document.addEventListener('DOMContentLoaded', () => {
  // Cart buttons
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const viewCartBtn = document.getElementById('view-cart-btn');
  const clearCartBtn = document.getElementById('clear-cart');
  const processOrderBtn = document.getElementById('process-order');

  addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const product = button.previousElementSibling.textContent;
      addToCart(product);
    });
  });

  if (viewCartBtn) {
    viewCartBtn.addEventListener('click', displayCart);
  }

  if (clearCartBtn) {
    clearCartBtn.addEventListener('click', clearCart);
  }

  if (processOrderBtn) {
    processOrderBtn.addEventListener('click', processOrder);
  }

  // Initialize modal close functionality
  initializeCartModal();
  
  // Initialize forms
  initializeForms();
});