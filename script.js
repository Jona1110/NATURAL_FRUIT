document.addEventListener("DOMContentLoaded", () => {
    // 1. Lógica de la pantalla de carga
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }, 800);

    // 2. Animación de "Fade In" al hacer Scroll
    const elementosFade = document.querySelectorAll('.fade-in');
    const observerOpciones = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOpciones);

    elementosFade.forEach(elemento => {
        observer.observe(elemento);
    });

    // 3. Lógica del Menú Lateral (Hamburguesa)
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    // Función para abrir el menú
    function abrirMenu() {
        sidebar.classList.add('active');
        overlay.classList.add('active');
        // Prevenir que la página de fondo haga scroll
        document.body.style.overflow = 'hidden'; 
    }

    // Función para cerrar el menú
    function cerrarMenu() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        // Reactivar el scroll de la página
        document.body.style.overflow = 'auto';
    }

    // Eventos de clic
    menuBtn.addEventListener('click', abrirMenu);
    closeBtn.addEventListener('click', cerrarMenu);
    overlay.addEventListener('click', cerrarMenu); // Cierra si haces clic fuera del menú
});