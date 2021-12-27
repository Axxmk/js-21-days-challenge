(() => {
	function setInnerText(id, text) {
		document.getElementById(id).innerText = text;
	}

	function countdown(date) {
		const SECOND = 1000;
		const MINUTE = SECOND * 60;
		const HOUR = MINUTE * 60;
		const DAY = HOUR * 24;

		const now = new Date().getTime()
		const future = new Date(date + ' 23:59:59').getTime()
		const unixTimeLeft = future - now

		setInnerText('days', Math.floor(unixTimeLeft / DAY))
		setInnerText('hours', Math.floor((unixTimeLeft % DAY) / HOUR))
		setInnerText('minutes', Math.floor((unixTimeLeft % HOUR) / MINUTE))
		setInnerText('seconds', Math.floor((unixTimeLeft % MINUTE) / SECOND))
	}

	function run() {
		setInterval(() => countdown("December 31, 2020"), 1000)
	}

	run();
})();