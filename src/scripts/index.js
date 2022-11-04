import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

const body = document.getElementsByTagName('body');
const menu = document.querySelector('.header__menu');
const nav = document.querySelector('#nav');
const close = document.querySelector('.close__menu');

menu.addEventListener('click', (e) => {
   nav.classList.toggle('open');
   document.body.style.overflow = 'hidden';
   e.stopPropagation();
})

close.addEventListener('click', (e) => {
   nav.classList.remove('open');
   document.body.style.overflow = 'scroll';
   e.stopPropagation();
})
