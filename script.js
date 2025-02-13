// Configuración de partículas
particlesJS("particles-js", {
    particles: {
        number: { value: 100 },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3 },
        move: { enable: true, speed: 1 },
        line_linked: { enable: true, opacity: 0.3 },
        color: { value: "#ffffff" }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" }
        }
    }
});

// Configuración de máquina de escribir
const typed = new Typed("#typed-text", {
    strings: [
        "Desarrollador Web",
        "Apasionado por la tecnología",
        "Creador de experiencias digitales"
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    menuToggle.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });
});

