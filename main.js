// Function to toggle the visibility of the menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
    menuButton.classList.toggle('active');

    // If the menu is now active, apply smooth scroll to the top of the menu
    if (menu.classList.contains('active')) {
        // Smooth scroll to the top of the menu
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// Add an event listener to the menu toggle button
const menuButton = document.getElementById('menuButton');
menuButton.addEventListener('click', toggleMenu);
