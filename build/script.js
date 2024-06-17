// Select elements
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Add click event listener to toggle menu visibility
menuToggle.addEventListener('click', function() {
    menu.classList.toggle('hidden'); // Toggle 'hidden' class on menu
});
