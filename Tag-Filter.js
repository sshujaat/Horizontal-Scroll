const linkFilter = document.querySelector('.link-filter');
const linkScroll = linkFilter.querySelector('.link-scroll');
const leftArrow = linkFilter.querySelector('.left-arrow');
const rightArrow = linkFilter.querySelector('.right-arrow');

const scrollRight = () => {
  linkScroll.scrollBy({ left: 300, behavior: 'smooth' });
};

const scrollLeft = () => {
  linkScroll.scrollBy({ left: -300, behavior: 'smooth' });
};

rightArrow.addEventListener('click', scrollRight);
leftArrow.addEventListener('click', scrollLeft);

// Hide arrows on mobile screens
const mq = window.matchMedia('(max-width: 767px)');
if (mq.matches) {
  leftArrow.style.display = 'none';
  rightArrow.style.display = 'none';
}
