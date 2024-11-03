document.addEventListener("DOMContentLoaded", function () {
    const memories = document.querySelectorAll(".memory");
  
    memories.forEach(memory => {
      memory.addEventListener("click", function () {
        alert("Aquí va un mensaje especial para ella 🎉");
      });
    });
  });


document.addEventListener("DOMContentLoaded", () => {
  const heartsContainer = document.getElementById("hearts-container");
  const numberOfHearts = 20; // Número de corazones a generar

  for (let i = 0; i < numberOfHearts; i++) {
    createHeart(heartsContainer);
  }
});

function createHeart(container) {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  // Posición aleatoria dentro de la ventana
  heart.style.left = Math.random() * 100 + "vw"; // De 0 a 100% del ancho de la ventana
  heart.style.bottom = "-30px"; // Inicia desde abajo

  // Tamaño aleatorio
  const size = Math.random() * 20 + 20; // Entre 20px y 40px
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;


  // Duración de la animación
  const duration = Math.random() * 5 + 2; // Entre 2s y 5s
  heart.style.animationDuration = `${duration}s`;

  container.appendChild(heart);

  // Remover el corazón después de la animación
  heart.addEventListener("animationend", () => {
    heart.remove();
  });
}



document.addEventListener('visibilitychange', function() {
  const audio = document.getElementById('background-audio');
  if (document.hidden) {
      // audio.pause(); // Descomentar si quieres pausar el audio cuando la pestaña no está activa
  } else {
      audio.play();
  }
});
