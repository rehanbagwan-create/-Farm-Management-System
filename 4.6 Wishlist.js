// Event listeners for Add to Cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        alert('Item added to cart successfully!');
        // Logic to add the item to the cart can be added here
    });
});

// Event listeners for Remove from Wishlist buttons
document.querySelectorAll('.remove').forEach(button => {
    button.addEventListener('click', function() {
        alert('Item removed from wishlist.');
        // Logic to remove the item from the wishlist can be added here
        button.closest('.product-item').remove(); // Remove item from the UI
    });
});

// Event listener for Back to Marketplace button
document.getElementById('back-to-marketplace').addEventListener('click', function() {
    window.location.href = '4.1 Buyer_Dashboard.html'; // Redirect to the marketplace home
});
