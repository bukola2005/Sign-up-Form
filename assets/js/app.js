const toggleBtn = document.querySelector('.mobile-nav__toggle');
const mobileMenu = document.querySelector('.mobile-nav__menu');

toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-active');
});