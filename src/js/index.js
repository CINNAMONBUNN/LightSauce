let burgerBtn = document.querySelector('.header__burger');
let nav = document.querySelector('.menu__list');

// console.log(navItems)
burgerBtn.onclick = () => {
    nav.classList.toggle('menu__list--mobile');
}