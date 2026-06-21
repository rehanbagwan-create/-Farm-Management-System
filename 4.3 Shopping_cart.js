// Event listener for Confirm Order button
document.getElementById('confirm-order').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    window.location.href('4.4 Order_confirmation.html');
    alert('Order confirmed! Thank you for your purchase.');
    // Redirect to order confirmation page or logic to finalize order
});

// Event listener for Back to Cart button
document.getElementById('back-to-cart').addEventListener('click', function() {
    window.location.href = '4.2 View_cart.html'; // Redirect to shopping cart page
});
