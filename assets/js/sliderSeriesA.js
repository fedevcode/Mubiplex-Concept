let isDownseriesA = false;
let startXseriesA;
let scrollLeftseriesA;
const sliderseriesA = document.querySelector('.seriesA-container__items');

const endseriesA = () => {
  isDownseriesA = false;
  sliderseriesA.classList.remove('active');
}

const startseriesA = (e) => {
  isDownseriesA = true;
  sliderseriesA.classList.add('active');
  startXseriesA = e.pageX || e.touches[0].pageX - sliderseriesA.offsetLeft;
  scrollLeft = sliderseriesA.scrollLeft;	
}

const moveseriesA = (e) => {
	if(!isDownseriesA) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - sliderseriesA.offsetLeft;
  const dist = (x - startXseriesA);
  sliderseriesA.scrollLeft = scrollLeft - dist;
}

(() => {
	sliderseriesA.addEventListener('mousedown', startseriesA);
	sliderseriesA.addEventListener('touchstart', startseriesA, { passive: false });

	sliderseriesA.addEventListener('mousemove', moveseriesA);
	sliderseriesA.addEventListener('touchmove', moveseriesA, { passive: false });

	sliderseriesA.addEventListener('mouseleave', endseriesA);
	sliderseriesA.addEventListener('mouseup', endseriesA);
	sliderseriesA.addEventListener('touchend', endseriesA);
})();
