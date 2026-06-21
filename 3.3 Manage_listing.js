// Event listener for Edit Listing button
document.getElementById('view-list-desc-price').addEventListener('click', function() {
    window.location.href = '3.4 view_listing.html';
});

document.getElementById('edit-listing').addEventListener('click', function() {
    alert('Edit listing functionality goes here.');
    // Redirect or open a form to edit a listing
});

// Event listener for Deactivate Listing button
document.getElementById('deactivate-listing').addEventListener('click', function() {
    alert('Deactivate listing functionality goes here.');
    // Logic to deactivate a listing
});

// Event listener for Delete Listing button
document.getElementById('delete-listing').addEventListener('click', function() {
    const confirmation = confirm('Are you sure you want to delete this listing?');
    if (confirmation) {
        alert('Listing deleted.');
        // Logic to delete a listing
    }
});

// Event listener for Back to Dashboard button
document.getElementById('back-dashboard').addEventListener('click', function() {
    window.location.href = '3.1 Marketplace_Dashboard.html'; // Redirect to the dashboard
});
