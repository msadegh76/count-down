const initialState = {
	timer: null,
	timerState: "active",
};
function countdownReducer(state = initialState, action) {
	switch (action.type) {
		case "UPDATE_TIMER": {
			return {
				...state,
				timer: action.payload,
			};
		}
		case "SET_TIMER_DEACTIVE": {
			return {
				...state,
				timer: action.payload,
				timerState: "deactive",
			};
		}

		default: {
			return state;
		}
	}
}

export default countdownReducer;
