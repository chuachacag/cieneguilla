document.querySelectorAll('.read-more').forEach(function(button) {
    button.addEventListener('click', function() {
        const textContent = this.previousElementSibling;
        textContent.classList.toggle('show-more');
        this.textContent = textContent.classList.contains('show-more') ? 'Ver menos' : 'Ver más';
    });
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});
/* START VER MAS TEXTO */
function toggleText(contentId, buttonId) {
    const textContent = document.getElementById(contentId);
    const button = document.getElementById(buttonId);

    if (textContent.classList.contains('expanded')) {
        textContent.classList.remove('expanded');
        button.textContent = 'Ver más';
    } else {
        textContent.classList.add('expanded');
        button.textContent = 'Ver menos';
    }
}


/* END VER MAS TEXTO */
/* START MENU DE CATEGORIAS */
document.querySelectorAll('.menu li a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Remover la clase 'active' de todos los enlaces
        document.querySelectorAll('.menu li a').forEach(function(link) {
            link.classList.remove('active');
        });
        
        // Añadir la clase 'active' al enlace seleccionado
        this.classList.add('active');
        
        // Ocultar todo el contenido con una transición
        document.querySelectorAll('.category-content').forEach(function(content) {
            content.classList.remove('active');
        });
        
        // Mostrar el contenido seleccionado con una transición
        const category = this.getAttribute('data-category');
        document.getElementById(category).classList.add('active');
        
        // Si el menú está en modo móvil, cerrarlo después de seleccionar
        if (window.innerWidth <= 768) {
            document.querySelector('.menu').classList.remove('active');
        }
    });
});

// Activar el primer enlace y mostrar su contenido por defecto
document.querySelector('.menu li a').classList.add('active');
document.getElementById('categoria1').classList.add('active');

/* END MENU DE CATEGORIAS */