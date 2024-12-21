/* Scripts para la pagina de contacto */
document.addEventListener('DOMContentLoaded', function() {
    var enlaceContacto = document.querySelector('a[href="#contacto"]');
    enlaceContacto.addEventListener('click', function(event) {
        event.preventDefault();
        var tituloContacto = document.getElementById('titulo-contacto');
        tituloContacto.scrollIntoView({ behavior: 'smooth' });
    });
});