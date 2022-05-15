export const startCountDown = (start, callback, onFinished) => {
	return setInterval(() => {
		start--;
		if (start > 0) {
			if (callback) callback(start);
		} else {
			if (onFinished) onFinished();
		}
	}, 1000);
};

export const convertTime = (time) => {
	let hour = Math.floor(time / 3600).toLocaleString("en-US", {
		minimumIntegerDigits: 2,
		useGrouping: false,
	});
	let min = Math.floor((time - hour * 3600) / 60).toLocaleString("en-US", {
		minimumIntegerDigits: 2,
		useGrouping: false,
	});
	let sec = (time - (hour * 3600 + min * 60)).toLocaleString("en-US", {
		minimumIntegerDigits: 2,
		useGrouping: false,
	});

	return { hour, min, sec };
};
