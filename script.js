document.addEventListener("DOMContentLoaded", () => {
    // 1. Quitar pantalla de carga cuando la página esté lista
    const loader = document.getElementById("loader");
    
    // Pequeño timeout para asegurar que el logo se vea al cargar
    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500); // Tiempo de la transición CSS
    }, 800);

    // 2. Animación de "Fade In" al hacer Scroll
    const elementosFade = document.querySelectorAll('.fade-in');

    const observerOpciones = {
        root: null, // Usa el viewport
        threshold: 0.1, // El 10% del elemento debe ser visible para ejecutar
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Deja de observar una vez que ya apareció
            }
        });
    }, observerOpciones);

    elementosFade.forEach(elemento => {
        observer.observe(elemento);
    });
});