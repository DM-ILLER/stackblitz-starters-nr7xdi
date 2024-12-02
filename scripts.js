// Shopping Cart Functionality
const cartItems = [];

document.querySelectorAll('.add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const product = button.previousElementSibling.textContent;
    cartItems.push(product);
    alert('Item added');
  });
});

document.getElementById('view-cart-btn').addEventListener('click', () => {
  const modal = document.getElementById('cart-modal');
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = ''; // Clear current cart
  cartItems.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    cartList.appendChild(li);
  });
  modal.style.display = 'block';
});

document.getElementById('clear-cart').addEventListener('click', () => {
  cartItems.length = 0;
  alert('Cart cleared');
});

document.getElementById('process-order').addEventListener('click', () => {
  alert('Thank you for your order');
});

// Close Modal
window.onclick = function (event) {
  const modal = document.getElementById('cart-modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// Feedback Form Submission
document.getElementById('feedback-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your feedback!');
  e.target.reset();
});

// Custom Order Form Submission
document.getElementById('custom-order-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Your custom order has been submitted!');
  e.target.reset();
});
