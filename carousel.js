let currentIndex = 0; // Índice de la imagen actual
const images = document.querySelectorAll('.carousel-container img');
const totalImages = images.length;
console.log(totalImages);
images.forEach((img, index) => {
    console.log(`Image ${index}:`, img.src); // Muestra las rutas de las imágenes
});

// Función para actualizar el carrusel
function updateCarousel() {
    images.forEach((img, index) => {
        img.style.display = index === currentIndex ? 'block' : 'none'; // Muestra solo la imagen actual
    });
}

// Inicializar el carrusel al cargar la página
updateCarousel();

// Evento para el botón siguiente
document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages; // Aumenta el índice
    updateCarousel();
});

// Evento para el botón anterior
document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Disminuye el índice
    updateCarousel();
});
