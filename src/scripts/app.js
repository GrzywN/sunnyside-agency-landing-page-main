const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');

let isMenuExpanded = false;
let resizeTimer;

const handleUserClicks = (event) => {
  if (isClickedOnHamburger(event)) {
    toggleNavMenu();
  } else if (isMenuExpanded && isClickedOutsideMenu(event)) {
    toggleNavMenu();
  }
};

const isClickedOnHamburger = (event) =>
  event.target.id === 'hamburger' || event.target.classList.contains('hamburger__bar');
const isClickedOutsideMenu = (event) => !event.target.classList.contains('nav__list');

const toggleNavMenu = () => {
  isMenuExpanded = !isMenuExpanded;
  hamburger.dataset.expanded = `${isMenuExpanded}`;
  hamburger.ariaExpanded = isMenuExpanded;
  nav.dataset.expanded = `${isMenuExpanded}`;
};

const stopAnimationOnResize = () => {
  document.body.classList.add('resize-animation-stopper');
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove('resize-animation-stopper');
  }, 400);
};

document.addEventListener('click', (event) => handleUserClicks(event));
window.addEventListener('resize', stopAnimationOnResize);
