const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');

let isMenuExpanded = false;
let resizeTimer;

const toggleNavMenu = () => {
  isMenuExpanded = !isMenuExpanded;
  hamburger.dataset.expanded = `${isMenuExpanded}`;
  hamburger.ariaExpanded = isMenuExpanded;
  nav.dataset.expanded = `${isMenuExpanded}`;
};

const closeWhileClickedOutside = (event) => {
  if (!isMenuExpanded) return;
  if (isClickedOutside(event)) toggleNavMenu();
};

const isClickedOutside = (event) =>
  !event.target.classList.contains('nav__list') && event.target.id !== 'hamburger';

const stopAnimationOnResize = () => {
  document.body.classList.add('resize-animation-stopper');
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove('resize-animation-stopper');
  }, 400);
};

hamburger.addEventListener('click', toggleNavMenu);
document.addEventListener('click', (event) => closeWhileClickedOutside(event));

window.addEventListener('resize', stopAnimationOnResize);
