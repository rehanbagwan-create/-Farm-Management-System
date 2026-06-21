// Event listener for the form submit
document.getElementById('new-product-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert('Product saved. Proceeding to preview.');
    // Redirect to preview page (you can create this page)
    window.location.href = 'product-preview.html';
});

// Event listener for the Back button
document.getElementById('back-dashboard').addEventListener('click', function() {
    // Redirect to the marketplace dashboard
    window.location.href = '3.1 Marketplace_Dashboard.html';
});
