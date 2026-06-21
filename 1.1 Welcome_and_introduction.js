

document.addEventListener('DOMContentLoaded', function () {
    // Attach an event listener to the "Get Started" button
    const getStartedButton = document.querySelector('a button');

    if (getStartedButton) {
        getStartedButton.addEventListener('click', function () {
            // Perform any actions needed before redirecting
            console.log('Get Started button clicked');

            // Optionally, you can show a confirmation message or perform an action here
            // alert('Redirecting to the next page...');
        });
    }
});
