// Confirm before redirecting to dashboard
document.querySelector('.account a').addEventListener('click', function(event) {
    const confirmRedirect = confirm("Do you want to go back to the dashboard?");
    if (!confirmRedirect) {
        event.preventDefault();
    }
});
