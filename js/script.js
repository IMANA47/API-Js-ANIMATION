// Select box element
const box = document.getElementById('animationBox');

// Click event: Change background color on click
box.addEventListener('click', function() {
    box.style.backgroundColor = 'lightgreen';
    box.textContent = 'Clicked!';
})

// Double-click event: Enlarge the box on double-click
box.addEventListener('dblclick', function() {
    box.style.width = '500px';
    box.style.height = '350px';
    box.textContent = 'Double Clicked!';
});