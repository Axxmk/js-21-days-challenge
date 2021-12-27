function onScroll() {
	const moon = document.querySelector('.moon');
	const wish = document.querySelector('.wish');

	moon.style.transform = `translate(${window.scrollY * 0.5}%, ${window.scrollY * -0.7}%)`;
	wish.style.transform = `translateY(${window.scrollY * -1.6}%)`;
}

document.addEventListener('scroll', onScroll);