/* Scripts para la pagina de contacto */
document.addEventListener('DOMContentLoaded', function() {
    var enlaceContacto = document.querySelector('a[href="#contacto"]');
    enlaceContacto.addEventListener('click', function(event) {
        event.preventDefault();
        var tituloContacto = document.getElementById('titulo-contacto');
        tituloContacto.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const carouselMotores = new bootstrap.Carousel('#carouselMotores', {
        interval: 3000,
        ride: 'carousel'
    });

    const carouselSeparacion = new bootstrap.Carousel('#carouselSeparacion', {
        interval: 3000,
        ride: 'carousel'
    });
});