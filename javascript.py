const homeLink = document.getElementById("homeLink");
const servicesLink = document.getElementById("servicesLink");
const stylistsLink = document.getElementById("stylistsLink");

function navigateToHome(event) {
    event.preventDefault();
    window.location.href = "home_page.html";
}

function navigateToServices(event) {
    event.preventDefault();
    window.location.href = "html_SERVICES.html";
}

function navigateToStylists(event) {
    event.preventDefault();
    window.location.href = "STYLES.html";
}

homeLink.addEventListener("click", navigateToHome);
servicesLink.addEventListener("click", navigateToServices);
stylistsLink.addEventListener("click", navigateToStylists);
