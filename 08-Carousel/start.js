const images = document.querySelectorAll('img');
const previous = document.querySelector('.previous');
const next = document.querySelector(".next");

let currentIndex = 0;

function displayImg(images, newIndex) {
	const lastIndex = images.length - 1;

	if (newIndex < 0) {
		newIndex = lastIndex;
	}
	else if (newIndex > lastIndex) {
		newIndex = 0;
	}

	const newImage = images[newIndex];
	newImage.scrollIntoView({ behavior: 'smooth' });

	currentIndex = newIndex;
}

previous.addEventListener('click', () => {
	displayImg(images, currentIndex - 1);
})

next.addEventListener('click', () => {
	displayImg(images, currentIndex + 1);
})