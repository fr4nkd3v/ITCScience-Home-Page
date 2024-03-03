// Variables
const body = document.querySelector('body');
const menuBtn = document.querySelector('header .menu');
const lateralMenuPanel = document.querySelector('header .lateral-menu');
const handIcon = document.querySelector('.initial .header .hand')

// Handlers
function handlerClickMenuBtn() {
  menuBtn.classList.toggle('active');
  body.classList.toggle('no-scroll')
}
function setHandAnimation() {
  if (handIcon.classList.contains('first-animate') || handIcon.classList.contains('animate'))
    return

  handIcon.classList.add('animate')
  setTimeout(() => {
    handIcon.classList.remove('first-animate')
    handIcon.classList.remove('animate')
  }, 1200)
}

// Event Listeners
function eventListeners() {
  menuBtn.addEventListener('click', handlerClickMenuBtn);
  handIcon.addEventListener('click', setHandAnimation)
}
eventListeners();

document.addEventListener('DOMContentLoaded', () => {
  handIcon.classList.add('first-animate')
  setTimeout(() => {
    handIcon.classList.remove('first-animate')
    handIcon.classList.remove('animate')
  }, 2200)
})