import { UPDATE_TIMER, SET_TIMER_DEACTIVE } from "./ActionTypes";

export const stopTimer = () => {
	return { type: SET_TIMER_DEACTIVE, payload: 0 };
};

export const updateTimer = (t) => {
	return { type: UPDATE_TIMER, payload: t };
};
