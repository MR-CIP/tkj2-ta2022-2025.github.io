// Smooth scrolling to anchor links
function scrollToNextSection(sectionId) {
    const nextSection = document.getElementById(sectionId);
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
}

const navbar = document.querySelector('.main-navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.menu');
    const mainNavbar = document.querySelector('.main-navbar');

    hamburgerMenu.addEventListener('click', () => {
        mainNavbar.classList.toggle('show');
    });

    menu.querySelectorAll('li a').forEach(item => {
        item.addEventListener('click', () => {
            mainNavbar.classList.remove('show');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu li a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

window.addEventListener('load', function() {
    const pageContainer = document.querySelector('.page-container');
    pageContainer.classList.add('loaded');
});