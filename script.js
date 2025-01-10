function increaseTextSize() {
    document.body.style.fontSize = '120%'; 
}

function decreaseTextSize() {
    document.body.style.fontSize = '100%'; 
}

// let currentFontSize = 100;

// function increaseTextSize() {
//     currentFontSize *= 1.2; 
//     document.body.style.fontSize = currentFontSize + '%';
// }

// function decreaseTextSize() {
//     currentFontSize /= 1.2; 
//     document.body.style.fontSize = currentFontSize + '%';
// }

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

// Adding keyboard navigation support for dropdown menu
document.querySelectorAll('header nav ul li a[aria-haspopup="true"]').forEach(menu => {
    menu.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const expanded = menu.getAttribute('aria-expanded') === 'true' || false;
            menu.setAttribute('aria-expanded', !expanded);
        }
    });
});






