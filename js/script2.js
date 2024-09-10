const box = document.getElementById('box');

// 1. Animation de la taille au clic
box.addEventListener('click', function() {
    anime({
        targets: '#box',
        width: '500px',
        height: '350px',
        duration: 1000, // Durée de l'animation en ms
        easing: 'easeInOutQuad'
    });
});

// 2. Rotation au double clic
box.addEventListener('dblclick', function() {
    anime({
        targets: '#box',
        rotate: '1turn',
        duration: 1000,
        easing: 'easeInOutSine'
    });
});

// 3. Changement de couleur au survol
box.addEventListener('mouseover', function() {
    anime({
        targets: '#box',
        backgroundColor: '#FF6347', // Tomate
        duration: 800,
        easing: 'easeInOutQuad'
    });
});

// 4. Chnager la forme et la couleur quand la souris sort
box.addEventListener('mouseout', function() {
    anime({
        targets: '#box',
        left: '240px',
        backgroundColor: '#FFF',
        borderRadius: ['0%', '50%'],
        easing: 'easeInOutQuad'
    });
});

// 5. Animation lors de l'appui d'une touche du clavier
document.addEventListener('keydown', function() {
    anime({
        targets: '#box',
        scale: [1, 1.2], // Agrandissement et retour à la taille normale
        duration: 500,
        easing: 'easeInOutQuad'
    });
});