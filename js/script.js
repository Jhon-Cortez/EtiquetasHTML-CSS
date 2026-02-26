fetch('./pages/header.html')
    .then(res => res.text())
    .then(data => {
    document.getElementById('header-container').innerHTML = data;
})
.catch(err => console.error('Error cargando header:', err));
fetch('./pages/footer.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('footer-container').innerHTML = data;
})
.catch(err => console.error('Error cargando footer:', err));
fetch('./pages/listas.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('listas-container').innerHTML = data;
})
.catch(err => console.error('Error cargando listas:', err));
fetch('./pages/texto-contenido.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('texto-container').innerHTML = data;
})
.catch(err => console.error('Error cargando texto-contenido:', err));
fetch('./pages/formularios.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('formularios-container').innerHTML = data;
})
.catch(err => console.error('Error cargando formularios:', err));
fetch('./pages/tablas.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('tablas-container').innerHTML = data;
})
.catch(err => console.error('Error cargando tablas:', err));
fetch('./pages/multimedia.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('multimedia-container').innerHTML = data;
})
.catch(err => console.error('Error cargando multimedia:', err));




