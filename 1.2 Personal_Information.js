

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const submitButton = document.querySelector('input[type="submit"]');
    const backButton = document.querySelector('input[type="button"]');
    
    // Function to check if passwords match
    function validatePasswords() {
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirm-password');

        if (password.value !== confirmPassword.value) {
            alert('Passwords do not match');
            return false;
        }
        return true;
    }

    // Attach a submit event listener to the form
    form.addEventListener('submit', function (event) {
        if (!validatePasswords()) {
            event.preventDefault(); // Prevent form submission if passwords do not match
        }
    });

    // Optional: Attach a click event listener to the back button
    backButton.addEventListener('click', function () {
        window.location.href = '1.1 Welcome_and_introduction.html';
    });
});
