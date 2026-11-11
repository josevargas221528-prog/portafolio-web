// Menú desplegable para pantallas pequeñas
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-menu a");

menuBtn.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("active");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    menuBtn.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
});

// Cerrar el menú al seleccionar una sección.
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Abrir menú");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});

// Animaciones de entrada al desplazarse por la página.
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealElements.forEach((element) => revealObserver.observe(element));
} else {
    revealElements.forEach((element) => element.classList.add("visible"));
}

// Resaltar en el menú la sección que se está viendo.
const pageSections = document.querySelectorAll("main section[id]");

if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute("id");

                navLinks.forEach((link) => {
                    const isCurrent = link.getAttribute("href") === `#${currentId}`;
                    link.classList.toggle("active", isCurrent);

                    if (isCurrent) {
                        link.setAttribute("aria-current", "location");
                    } else {
                        link.removeAttribute("aria-current");
                    }
                });
            }
        });
    }, {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0
    });

    pageSections.forEach((section) => sectionObserver.observe(section));
}

// Año automático en el pie de página.
document.getElementById("currentYear").textContent = new Date().getFullYear();
