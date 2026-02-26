fetch('./pages/footer.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('footer-container').innerHTML = data;
    })
    .catch(err => console.error('Error cargando footer:', err));