// Forms handling module
export function initializeForms() {
  const feedbackForm = document.getElementById('feedback-form');
  const customOrderForm = document.getElementById('custom-order-form');
  
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your feedback!');
      e.target.reset();
    });
  }
  
  if (customOrderForm) {
    customOrderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Your custom order has been submitted!');
      e.target.reset();
    });
  }
}