/* =====================================================
   MENÚ RESPONSIVE
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


/* =====================================================
   CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN
===================================================== */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* =====================================================
   ANIMACIÓN AL HACER SCROLL
===================================================== */

const elements = document.querySelectorAll(
    ".section-title, .about-container, .skill-card, .project-card, .timeline-item, .contact-card"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


elements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});
```
