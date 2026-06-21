// Sample data for charts
const productData = {
    labels: ['Milk', 'Eggs', 'Meat', 'Other'],
    quantities: [100, 200, 150, 50], // Example quantities
};

// Create Bar Chart
const barCtx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: productData.labels,
        datasets: [{
            label: 'Quantity',
            data: productData.quantities,
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Create Pie Chart
const pieCtx = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: productData.labels,
        datasets: [{
            label: 'Product Distribution',
            data: productData.quantities,
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    }
});

// Event listener for filter button
document.getElementById('filter-data').addEventListener('click', function() {
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const productType = document.getElementById('product-type').value;

    // Logic to filter data based on selected criteria
    console.log('Filtering data with:', { startDate, endDate, productType });
});

// Event listener for return to dashboard button
document.getElementById('return-dashboard').addEventListener('click', function() {
    window.location.href = '2.1 Product_Management_Dashboard.html'; // Redirect to the dashboard
});
