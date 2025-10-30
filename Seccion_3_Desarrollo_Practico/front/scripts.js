/*
Creacion de front-end con jQuery y JavaScript

Funcionalidad solicitada:
1. Capturar el evento click del botón "Guardar" usando jQuery.
2. Obtener el valor del campo de texto con jQuery.
3. Validar que el campo no esté vacío;
*/

$(document).ready(function() {
  $('#btnGuardar').on('click', function() {
    const texto = $('#nombre').val().trim();

    if (texto === "") {
      $('#resultado').text("⚠️ Por favor escribe algo.").css('color', 'red');
      return;
    }

    // Lógica en vanilla JS: convertir a mayúsculas
    const textoMayus = texto.toUpperCase();

    // Mostrar resultado usando jQuery
    $('#resultado').text(textoMayus).css({
      'color': 'green',
      'font-weight': 'bold',
      'margin-top': '10px'
    });
  });
});
