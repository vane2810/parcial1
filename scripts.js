document.addEventListener('DOMContentLoaded', function() {
    var relleno = document.querySelectorAll('#contenedor p');
    var txt = document.getElementById('txt');

    relleno.forEach(function(elemento) {
        function agregarTexto() {
            var textoAgregado = elemento.getAttribute('data-texto');

            var nuevo = document.createElement('div');
            nuevo.textContent = textoAgregado;

            txt.appendChild(nuevo);

            elemento.removeEventListener('click', agregarTexto);
        }
        elemento.addEventListener('click', agregarTexto);
    });
});