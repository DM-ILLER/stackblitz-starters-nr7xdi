// Cart functionality module
export const cartItems = [];

export function addToCart(item) {
  cartItems.push(item);
  alert('Item added');
}

export function clearCart() {
  cartItems.length = 0;
  alert('Cart cleared');
}

export function processOrder() {
  alert('Thank you for your order');
}

export function displayCart() {
  const modal = document.getElementById('cart-modal');
  const cartList = document.getElementById('cart-items');
  
  if (modal && cartList) {
    cartList.innerHTML = '';
    cartItems.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      cartList.appendChild(li);
    });
    modal.style.display = 'block';
  }
}

export function initializeCartModal() {
  window.onclick = function(event) {
    const modal = document.getElementById('cart-modal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
}