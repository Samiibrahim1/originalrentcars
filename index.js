document.querySelectorAll('.btn-rent').forEach(btn => {
    btn.addEventListener('click', () => {
      const price = parseFloat(btn.previousElementSibling.textContent.slice(1));
      calculateTotal(price);
    });
  });

  let totalPrice = 0;

  function calculateTotal(price) {
    totalPrice += price;
    alert(`Total price: $${totalPrice}`);
  }
  const searchInput = document.getElementById('search-input');
const carCards = document.querySelectorAll('.card');

searchInput.addEventListener('input', filterCars);

function filterCars() {
    const searchTerm = searchInput.value.toLowerCase();
  
    carCards.forEach(card => {
      const carTitle = card.querySelector('.card-title').textContent.toLowerCase();
  
      if (carTitle.includes(searchTerm)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  searchInput.addEventListener('input', filterCars);


  const rentButtons = document.querySelectorAll('.card .btn-danger');

// Add a click event listener to each button
rentButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Get the price text from the corresponding card
    const priceText = document.querySelectorAll('.card-text')[index].textContent;
    
    // Display an alert with the price
    alert(`The price for this car is ${priceText}`);
  });
});