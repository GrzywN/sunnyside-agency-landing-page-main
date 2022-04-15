const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');

let isMenuExpanded = false;
let resizeTimer;

const toggleMenu = () => {
  hamburger.dataset.expanded = `${isMenuExpanded}`;
  hamburger.ariaExpanded = isMenuExpanded;
  nav.dataset.expanded = `${isMenuExpanded}`;
  isMenuExpanded = !isMenuExpanded;
};

const stopAnimationOnResize = () => {
  document.body.classList.add('resize-animation-stopper');
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove('resize-animation-stopper');
  }, 400);
};

window.addEventListener('load', toggleMenu);
window.addEventListener('resize', stopAnimationOnResize);
hamburger.addEventListener('click', toggleMenu);
