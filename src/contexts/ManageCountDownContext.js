import { useContext } from "react";
import { createContext, useState, useEffect } from "react";

export const CountDownContext = createContext(1);

export const useCountDownContext = () => {
	const context = useContext(CountDownContext);
	return context;
};

export function ManageCountDownContext({ children }) {
	const [state, setState] = useState(216000);
	useEffect(() => {
		let interval = setInterval(() => {
			setState((preState) => {
				return preState - 1;
			});
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, [state]);
	let hour = Math.floor(state / 3600).toLocaleString("en-US", {
		minimumIntegerDigits: 2,
		useGrouping: false,
	});
	let min = Math.floor((state - hour * 3600) / 60).toLocaleString("en-US", {
		minimumIntegerDigits: 2,
		useGrouping: false,
	});
	let sec = (state - (hour * 3600 + min * 60)).toLocaleString("en-US", {
		minimumIntegerDigits: 2,
		useGrouping: false,
	});
	return (
		<CountDownContext.Provider value={{ timer: { hour, min, sec } }}>
			{children}
		</CountDownContext.Provider>
	);
}
