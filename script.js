// Configuración del contador regresivo
const eventDate = new Date("Mayo 03, 2025 16:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
        document.getElementById("countdown").innerText = "¡El evento ha comenzado!";
    }
}

// Actualiza el contador cada segundo
setInterval(updateCountdown, 1000);
updateCountdown();

// Animación al hacer scroll
window.addEventListener("scroll", function () {
    const infoSection = document.getElementById("info");
    const position = infoSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight / 1.3;

    if (position < screenHeight) {
        infoSection.classList.add("show");
    }
});

window.onload = function () {
    document.querySelector(".left").classList.add("show");
    document.querySelector(".right").classList.add("show");
};

