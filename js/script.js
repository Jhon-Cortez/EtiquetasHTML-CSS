//función para cargar html
function cargarHTML(url, contenedorId) {
  return fetch(url)
    .then(res => res.text())
    .then(data => {
      document.getElementById(contenedorId).innerHTML = data;
    })
    .catch(err => console.error(`Error cargando ${url}:`, err));
}

// cargar todo
Promise.all([
  cargarHTML('./pages/header.html', 'header-container'),
  cargarHTML('./pages/footer.html', 'footer-container'),
  cargarHTML('./pages/listas.html', 'listas-container'),
  cargarHTML('./pages/texto-contenido.html', 'texto-container'),
  cargarHTML('./pages/formularios.html', 'formularios-container'),
  cargarHTML('./pages/tablas.html', 'tablas-container'),
  cargarHTML('./pages/multimedia.html', 'multimedia-container')
]).then(() => {
  // ya existe el header

  const links = document.querySelectorAll('.nav-option');
  const sections = document.querySelectorAll('section');

  // mostrar primera sección por defecto
  document.getElementById('texto-contenido').classList.add('activa');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const destino = link.getAttribute('href').substring(1);

      // ocultar todas
      sections.forEach(sec => sec.classList.remove('activa'));

      // mostrar la seleccionada
      const seccion = document.getElementById(destino);
      if (seccion) {
        seccion.classList.add('activa');
      }
    });
  });
});