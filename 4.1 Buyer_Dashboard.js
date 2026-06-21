// Example functionality for search (currently only alerts)
document.querySelector('.search-bar button').addEventListener('click', function() {
    const searchQuery = document.querySelector('.search-bar input').value;
    alert('Searching for: ' + searchQuery);
    // Add logic to filter displayed products based on searchQuery
});

document.getElementById('view-cart').addEventListener('click', function() {
    window.location.href = '4.3 Shopping_cart.html';
}