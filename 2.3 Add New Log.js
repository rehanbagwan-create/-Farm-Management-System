// Event listener for milk product form submission
document.getElementById('milk-product-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const date = document.getElementById('milk-date').value;
    const quantity = document.getElementById('milk-quantity').value;
    const quality = document.getElementById('milk-quality').value;
    const animalId = document.getElementById('milk-animal-id').value;

    console.log('Milk Product:', { date, quantity, quality, animalId });
    window.location.href = '2.4 Confirmation.html';
});

// Event listener for livestock product form submission
document.getElementById('livestock-product-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const date = document.getElementById('livestock-date').value;
    const quantity = document.getElementById('livestock-quantity').value;
    const quality = document.getElementById('livestock-quality').value;
    const animalId = document.getElementById('livestock-animal-id').value;

    console.log('Livestock Product:', { date, quantity, quality, animalId });
    window.location.href = '2.4 Confirmation.html';
});

// Event listener for back to dashboard button
document.getElementById('back-to-dashboard').addEventListener('click', function() {
    window.location.href = '2.1 Product_Management_Dashboard.html'; // Redirect to the dashboard
});
