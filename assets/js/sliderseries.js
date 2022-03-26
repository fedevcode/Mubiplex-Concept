let isDownSeries = false;
let startXSeries;
let scrollLeftSeries;
const sliderSeries = document.querySelector('.serie-container__items');

const endSeries = () => {
  isDownSeries = false;
  sliderSeries.classList.remove('active');
}

const startSeries = (e) => {
  isDownSeries = true;
  sliderSeries.classList.add('active');
  startXSeries = e.pageX || e.touches[0].pageX - sliderSeries.offsetLeft;
  scrollLeft = sliderSeries.scrollLeft;	
}

const moveSeries = (e) => {
	if(!isDownSeries) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - sliderSeries.offsetLeft;
  const dist = (x - startXSeries);
  sliderSeries.scrollLeft = scrollLeft - dist;
}

(() => {
	sliderSeries.addEventListener('mousedown', startSeries);
	sliderSeries.addEventListener('touchstart', startSeries);

	sliderSeries.addEventListener('mousemove', moveSeries);
	sliderSeries.addEventListener('touchmove', moveSeries);

	sliderSeries.addEventListener('mouseleave', endSeries);
	sliderSeries.addEventListener('mouseup', endSeries);
	sliderSeries.addEventListener('touchend', endSeries);
})();