document.addEventListener('DOMContentLoaded', function() {
    var bookingForm = document.getElementById('booking-form');

    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var appointmentDate = document.getElementById('appointment-date').value;
        var haircutType = document.getElementById('haircut-type').value;
        var spaType = document.getElementById('spa-type').value;
        var gender = document.getElementById('Gander-type').value;

        var confirmationMessage = "Thank you for booking your appointment with Ireland Hair Salon.\n";
        confirmationMessage += "Your appointment details are as follows:\n";
        confirmationMessage += "Name: " + name + "\n";
        confirmationMessage += "Email: " + email + "\n";
        confirmationMessage += "Appointment Date: " + appointmentDate + "\n";
        confirmationMessage += "Haircut Type: " + haircutType + "\n";
        confirmationMessage += "Spa Type: " + spaType + "\n";
        confirmationMessage += "Gender: " + gender + "\n";
        confirmationMessage += "Your appointment has been scheduled successfully.";

        alert(confirmationMessage);

        bookingForm.reset();
    });
});
