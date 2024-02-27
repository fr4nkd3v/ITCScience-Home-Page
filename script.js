// Variables
const menuBtn = document.querySelector('header .menu');
const lateralMenuPanel = document.querySelector('header .lateral-menu');

// Handlers
function handlerClickMenuBtn() {
  menuBtn.classList.toggle('active');
}

// Event Listeners
function eventListeners() {
  menuBtn.addEventListener('click', handlerClickMenuBtn);
}
eventListeners();