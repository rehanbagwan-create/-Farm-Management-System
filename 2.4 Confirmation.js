// Example log data (this would be dynamically generated based on user input)
const logData = {
    date: "2024-10-15", // Replace with actual data
    quantity: "20", // Replace with actual data
    quality: "A", // Replace with actual data
    animalId: "Cow-123" // Replace with actual data
};

// Display log details
document.getElementById('log-date').textContent = logData.date;
document.getElementById('log-quantity').textContent = logData.quantity;
document.getElementById('log-quality').textContent = logData.quality;
document.getElementById('log-animal-id').textContent = logData.animalId;

// Event listener for Save And Add Another button
document.getElementById('save-another').addEventListener('click', function() {
    window.location.href = '2.3 Add New Log.html'; // Redirect to add new log page
});

// Event listener for Submit Logs button
document.getElementById('submit-logs').addEventListener('click', function() {
    window.location.href = '2.1 Product_Management_Dashboard.html'; // Redirect to product management page
    alert('Livestock product added successfully!');
});
