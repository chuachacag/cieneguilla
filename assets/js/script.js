document.querySelectorAll('.read-more').forEach(function(button) {
    button.addEventListener('click', function() {
        const textContent = this.previousElementSibling;
        textContent.classList.toggle('show-more');
        this.textContent = textContent.classList.contains('show-more') ? 'Ver menos' : 'Ver más';
    });
});