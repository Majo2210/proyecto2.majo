var menuItems = document.querySelectorAll('#nav-header li');

// Recorre todos los ítems y agrega un evento de clic a cada uno
menuItems.forEach(function(nav) {
  nav.addEventListener('click', function() {
    // Remueve la clase "active" de todos los ítems
    menuItems.forEach(function(navItem) {
      navItem.classList.remove('active');
    });

    // Agrega la clase "active" al ítem clicado
    this.classList.add('active');
  });
});

// Aplica la clase "active" inicialmente solo a los ítems "Inicio" y "Contacto"
var inicioItem = document.querySelector('#nav-header li:first-child');
var contactoItem = document.querySelector('#nav-header li:last-child');

inicioItem.classList.add('active');
contactoItem.classList.add('active');