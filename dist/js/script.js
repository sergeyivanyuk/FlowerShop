'use strict'
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.header__nav-list'),
      closeElem = document.querySelector('.header__nav-close');

hamburger.addEventListener('click', () =>  {
    menu.classList.add('active');
    hamburger.classList.add('active');
});

closeElem.addEventListener('click', () =>  {
    menu.classList.remove('active');
    hamburger.classList.remove('active');
});