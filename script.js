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

    function abrirMenu() {
        sidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; 
    }

    function cerrarMenu() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    menuBtn.addEventListener('click', abrirMenu);
    closeBtn.addEventListener('click', cerrarMenu);
    overlay.addEventListener('click', cerrarMenu); 

    // 4. Lógica de la Galería Aleatoria Dinámica
    const imagenesGaleria = document.querySelectorAll('.galeria-img');
    let indiceActual = -1;

    function mostrarImagenAleatoria() {
        if (imagenesGaleria.length === 0) return; 

        if (indiceActual !== -1) {
            imagenesGaleria[indiceActual].classList.remove('active');
        }

        let nuevoIndice;
        do {
            nuevoIndice = Math.floor(Math.random() * imagenesGaleria.length);
        } while (nuevoIndice === indiceActual && imagenesGaleria.length > 1);

        indiceActual = nuevoIndice;
        imagenesGaleria[indiceActual].classList.add('active');
    }

    if (imagenesGaleria.length > 0) {
        mostrarImagenAleatoria();
        setInterval(mostrarImagenAleatoria, 4000); 
    }
});