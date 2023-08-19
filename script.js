const navbar = document.getElementById('navbar');
const navLinks = navbar.querySelectorAll('a');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        navbar.classList.add('hovered');
    });
    link.addEventListener('mouseout', () => {
        navbar.classList.remove('hovered');
    });
});
