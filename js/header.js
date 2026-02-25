fetch('./pages/header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header-container').innerHTML = data;
  })
  .catch(err => console.error('Error cargando header:', err));