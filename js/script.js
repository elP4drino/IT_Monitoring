const title = document.querySelector('.azul');

title.addEventListener('mousemove', (e) => {
  const { left, top, width, height } = title.getBoundingClientRect();
  const { clientX, clientY } = e;
  
  // Calcula la posición relativa del mouse dentro del elemento
  const x = clientX - left;
  const y = clientY - top;

  // Calcula el radio de iluminación en píxeles
  const radius = 10;

  // Calcula la distancia desde el centro del elemento
  const distanceFromCenter = Math.sqrt((x - width / 2) ** 2 + (y - height / 2) ** 2);

  // Actualiza la opacidad del pseudo-elemento ::before basado en la distancia
  const maxDistance = Math.sqrt((width / 2) ** 2 + (height / 2) ** 2);
  const opacity = 1 - distanceFromCenter / maxDistance;

  // Actualiza el estilo del pseudo-elemento ::before
  title.style.setProperty('--mouse-x', x + 'px');
  title.style.setProperty('--mouse-y', y + 'px');
  title.style.setProperty('--radius', radius + 'px');
  title.style.setProperty('--opacity', opacity);
});