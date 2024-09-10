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

// Mouseover event: Change hover border color
box.addEventListener('mouseover', function() {
    box.style.borderColor = 'red';
    box.textContent = 'Mouse Over!';
});

// Mouseout event: Reset the border when leaving the box
box.addEventListener('mouseout', function() {
    box.style.borderColor = 'blue';
    box.textContent = 'Hover, Click, and More!';
});

// Keydown event: Reduce the box when a keyboard key is pressed
document.addEventListener('keydown', function() {
    box.style.width = '300px';
    box.style.height = '200px';
    box.textContent = 'Key Pressed!';
});