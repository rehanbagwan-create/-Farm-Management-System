// Event listener for View Order Details button
document.getElementById('order-details-and-management').addEventListener('click', function() {
    window.location.href = '3.6 Order_Details_And_Management.html'; 
});

document.getElementById('view-order-details').addEventListener('click', function() {
    alert('View order details functionality goes here.');
    // Redirect to order details page or display order details
});

// Event listener for Update Order Status button
document.getElementById('update-order-status').addEventListener('click', function() {
    alert('Update order status functionality goes here.');
    // Logic to update order status
});

// Event listener for Back to Dashboard button
document.getElementById('back').addEventListener('click', function() {
    window.location.href = '3.1 Marketplace_Dashboard.html'; // Redirect to the dashboard
});

// Event listener for Filter button
document.getElementById('filter-orders').addEventListener('click', function() {
    const status = document.getElementById('order-status').value;
    alert('Filtering orders by status: ' + status);
    // Logic to filter orders based on the selected status
});
