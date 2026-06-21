// Event listener for Download Receipt button
document.getElementById('download-receipt').addEventListener('click', function() {
    alert('Receipt downloaded successfully!');
    // Logic to handle the actual receipt download can be added here
});

// Event listener for View Order Details button
document.getElementById('view-order-details').addEventListener('click', function() {
    alert('Redirecting to order details...');
    // Redirect to order details page or display more information
});

// Event listener for Continue Shopping button
document.getElementById('continue-shopping').addEventListener('click', function() {
    window.location.href = '4.1 Buyer_Dashboard.html'; // Redirect to the marketplace home
});
