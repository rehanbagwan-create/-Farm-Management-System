// Event listener for Save Changes button
document.getElementById('account-settings-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    alert('Your changes have been saved successfully!');
    // Logic to save changes can be added here
});

// Event listener for Back to Dashboard button
document.getElementById('back-dashboard').addEventListener('click', function() {
    window.location.href = '4.1 Buyer_Dashboard.html'; // Redirect to the dashboard
});
