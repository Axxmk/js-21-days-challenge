const bodyElem = document.querySelector('body')
const eyeElem = document.querySelectorAll('.eye')

function onMouseMove({ pageX, pageY }) {
	eyeElem.forEach((eye) => {
		const { left, top } = eye.getBoundingClientRect()

		const eyeCenterX = left + eye.offsetWidth / 2;
		const eyeCenterY = top + eye.offsetHeight / 2;

		const radian = Math.atan2(pageX - eyeCenterX, pageY - eyeCenterY)
		const angle = (radian * 180 / Math.PI) * -1

		eye.style.transform = `rotate(${angle}deg)`
	})
}

