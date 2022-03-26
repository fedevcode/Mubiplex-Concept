// --- BURGER MENU ---
let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
const menu = document.querySelector('#menu');
const menu2 = document.querySelector('#menu2');
const menu3 = document.querySelector('#menu3');
const menu4 = document.querySelector('#menu4');
const menu5 = document.querySelector('#menu5');
const burger = document.querySelector('#burger');

var isOpen = false;

boton.addEventListener('click', () => handleMenuOpen());

let handleMenuOpen = () => {
  if(isOpen) {
    enlaces.classList.remove('isClosed');
    enlaces.classList.add('isOpen');
  } else{
    enlaces.classList.remove('isOpen');  
    enlaces.classList.add('isClosed');
  }
  handleBurgerAnimation();
  isOpen = !isOpen;
}

let handleBurgerAnimation = () => {
  burger.classList.toggle('burger-closed');
  burger.classList.toggle('burger-open');
}

let menus = [menu, menu2, menu3, menu4, menu5];

menus.forEach(menu => {
  menu.addEventListener('click', () => handleMenuOpen());
});

window.addEventListener('resize', function(){
  if(screen.width > 750){
      contador = 0;
      enlaces.classList.remove('isClosed');
      enlaces.className = ('nav__navbar-container--enlaces isOpen');
  };
});
// --- / BURGER MENU ----

// --- BORDER HOVER PLANS ----
const initialPlan = document.getElementById('initialPlan');
const basicPlan = document.getElementById('basicPlan');
const cinephilePlan = document.getElementById('cinephilePlan');
const buttonPlan = document.getElementById('buttonPlan');
const buttonBPlan = document.getElementById('buttonBPlan');
const buttonCPlan = document.getElementById('buttonCPlan');

initialPlan.addEventListener('mouseover', () => {
  initialPlan.classList.add('borderPlan');
  buttonPlan.style.backgroundColor = '#7D5ADE';
  buttonPlan.style.transition = 'all 1s ease';
});
initialPlan.addEventListener('mouseout', () => {
  initialPlan.classList.remove('borderPlan');
  buttonPlan.style.backgroundColor = '#2C394A';
  buttonPlan.style.transition = 'all 1s ease';
});

basicPlan.addEventListener('mouseover', () => {
  basicPlan.classList.add('borderPlan');
  buttonBPlan.style.backgroundColor = '#7D5ADE';
  buttonBPlan.style.transition = 'all 1s ease';
});
basicPlan.addEventListener('mouseout', () => {
  basicPlan.classList.remove('borderPlan');
  buttonBPlan.style.backgroundColor = '#2C394A';
  buttonBPlan.style.transition = 'all 1s ease';
});

cinephilePlan.addEventListener('mouseover', () => {
  cinephilePlan.classList.add('borderPlan');
  buttonCPlan.style.backgroundColor = '#7D5ADE';
  buttonCPlan.style.transition = 'all 1s ease';
});
cinephilePlan.addEventListener('mouseout', () => {
  cinephilePlan.classList.remove('borderPlan');
  buttonCPlan.style.backgroundColor = '#2C394A';
  buttonCPlan.style.transition = 'all 1s ease';
});
// --- FREQUENT QUESTIONS ----
const block = document.querySelectorAll('.accordion__container--block');
const icon = document.querySelectorAll('.accordion__container--block--title--icon');

block.forEach( ( text , i )=> {
  block[i].addEventListener('click', ()=> {

    block.forEach( ( bloque , i )=> {
      block[i].classList.remove('show');
    });
    
    block[i].classList.add('show');
  });
});

block.forEach( ( texts , i )=> {
  block[i].addEventListener('click', ()=> {

    icon.forEach( ( icono , i )=> {
      icon[i].classList.remove('flip-scale-up-hor');
    });
    
    icon[i].classList.add('flip-scale-up-hor');
  });
});
// --- / FREQUENT QUESTIONS ---