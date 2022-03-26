let isDownMovies = false;
let startXMovies;
let scrollLeftMovies;
const sliderMovies = document.querySelector('.moviePremiere-container__items');

const endMovies = () => {
  isDownMovies = false;
  sliderMovies.classList.remove('active');
}

const startMovies = (e) => {
  isDownMovies = true;
  sliderMovies.classList.add('active');
  startXMovies = e.pageX || e.touches[0].pageX - sliderMovies.offsetLeft;
  scrollLeft = sliderMovies.scrollLeft;	
}

const moveMovies = (e) => {
	if(!isDownMovies) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - sliderMovies.offsetLeft;
  const dist = (x - startXMovies);
  sliderMovies.scrollLeft = scrollLeft - dist;
}

(() => {
	sliderMovies.addEventListener('mousedown', startMovies);
	sliderMovies.addEventListener('touchstart', startMovies, { passive: false });

	sliderMovies.addEventListener('mousemove', moveMovies);
	sliderMovies.addEventListener('touchmove', moveMovies, { passive: false });

	sliderMovies.addEventListener('mouseleave', endMovies);
	sliderMovies.addEventListener('mouseup', endMovies);
	sliderMovies.addEventListener('touchend', endMovies);
})();
