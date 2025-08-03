const nav = document.querySelector('nav');
const sideBarOpen = document.querySelector('.sideBarOpen');
const sideBarClose = document.querySelector('.sideBarClose');

sideBarOpen.onclick = () => {
    nav.classList.add('active');
}

sideBarClose.onclick = () => {
    nav.classList.remove('active');
}