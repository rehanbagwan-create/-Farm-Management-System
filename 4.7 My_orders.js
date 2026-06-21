// Event listeners for View Order Details buttons
document.querySelectorAll('.view-order-details').forEach(button => {
    button.addEventListener('click', function() {
        alert('Redirecting to order details...');
        // Logic to redirect to order details page can be added here
    });
});

// Event listeners for Track Shipment buttons
document.querySelectorAll('.track-shipment').forEach(button => {
    button.addEventListener('click', function() {
        window.location.href = '4.8 Tracking_Product.html';
    });
});

// Event listeners for Reorder buttons
document.querySelectorAll('.reorder').forEach(button => {
    button.addEventListener('click', function() {
        alert('Reordering items...');
        // Logic to reorder items can be added here
    });
});

document.getElementById('back-dashboard').addEventListener('click', function() {
    window.location.href = '4.1 Buyer_Dashboard.html'; // Redirect to the dashboard
});