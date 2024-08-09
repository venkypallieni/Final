document.addEventListener('DOMContentLoaded', function () {
    var contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        var name = document.getElementById('name').value;
        var phoneNumber = document.getElementById('Number').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        var confirmationMessage = "Thank you for contacting Ireland Hair Salon!\n\n";
        confirmationMessage += "Your details:\n";
        confirmationMessage += "Name: " + name + "\n";
        confirmationMessage += "Phone Number: " + phoneNumber + "\n";
        confirmationMessage += "Email: " + email + "\n";
        confirmationMessage += "Message:\n" + message;

        alert(confirmationMessage);

        // You can also send the form data to a server for processing or storage if needed

        // Reset the form after submission (optional)
        contactForm.reset();
    });
});
