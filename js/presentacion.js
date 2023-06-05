classList.add('active')

var menuItems = document.querySelectorAll('#Menu li');

// Recorre todos los ítems y agrega un evento de clic a cada uno
menuItems.forEach(function(item) {
  item.addEventListener('click', function() {
    // Remueve la clase "active" de todos los ítems
    menuItems.forEach(function(item) {
      item.classList.remove('active');
    });

    // Agrega la clase "active" al ítem clicado
    this.classList.add('active');
  });
});

// Aplica la clase "active" inicialmente solo a los ítems "Inicio" y "Contacto"
var inicioItem = document.querySelector('#Menu li:first-child');
var contactoItem = document.querySelector('#Menu li:last-child');

inicioItem.classList.add('active');
contactoItem.classList.add('active');







