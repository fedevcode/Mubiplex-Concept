let isDownfamily = false;
let startXfamily;
let scrollLeftfamily;
const sliderfamily = document.querySelector('.family-container__items');

const endfamily = () => {
  isDownfamily = false;
  sliderfamily.classList.remove('active');
}

const startfamily = (e) => {
  isDownfamily = true;
  sliderfamily.classList.add('active');
  startXfamily = e.pageX || e.touches[0].pageX - sliderfamily.offsetLeft;
  scrollLeft = sliderfamily.scrollLeft;	
}

const movefamily = (e) => {
	if(!isDownfamily) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - sliderfamily.offsetLeft;
  const dist = (x - startXfamily);
  sliderfamily.scrollLeft = scrollLeft - dist;
}

(() => {
	sliderfamily.addEventListener('mousedown', startfamily);
	sliderfamily.addEventListener('touchstart', startfamily, { passive: false });

	sliderfamily.addEventListener('mousemove', movefamily);
	sliderfamily.addEventListener('touchmove', movefamily, { passive: false });

	sliderfamily.addEventListener('mouseleave', endfamily);
	sliderfamily.addEventListener('mouseup', endfamily);
	sliderfamily.addEventListener('touchend', endfamily);
})();
