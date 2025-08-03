const body = document.querySelector('body');
const header = document.querySelector('header');
const menuOpen = document.querySelector('.fa-bars-staggered');
const navbarCollapse = document.querySelector('.navbar-collapse');

menuOpen.onclick = () => {
    navbarCollapse.classList.add('show');
    menuOpen.classList.toggle('fa-xmark');
}