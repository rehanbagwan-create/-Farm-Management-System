// Event listener for Proceed to Checkout button
document.getElementById('checkout').addEventListener('click', function() {
    window.location.href = '4.3 Shopping_cart.html';
    // Redirect or navigate to the checkout page
});

// Event listener for Continue Shopping button
document.getElementById('continue-shopping').addEventListener('click', function() {
    window.location.href = '4.1 Buyer_Dashboard.html';
    // Redirect or navigate back to the shopping page
});

// Event listener for Clear Cart button
document.getElementById('clear-cart').addEventListener('click', function() {
    const confirmation = confirm('Are you sure you want to clear the cart?');
    if (confirmation) {
        alert('Cart cleared.');
        // Logic to clear the cart
    }
});

// Event listener for Estimate Shipping button
document.getElementById('estimate-shipping').addEventListener('click', function() {
    const location = document.getElementById('location').value;
    if (location) {
        document.getElementById('shipping-result').textContent = 'Estimated shipping for ' + location + ': $5.00'; // Sample result
    } else {
        alert('Please enter a location to estimate shipping.');
    }
});
