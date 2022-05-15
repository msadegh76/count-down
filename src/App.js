import { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateTimer, stopTimer } from "./redux/actions/Actions";
import { startCountDown } from "./service/count-down.service";
let inited = false;
function App() {
	const theme = {
		light_red: "#dc3545",
		dark_blue: "#1e1e2d",
		deep_blue: "#188124",
	};
	const dispatch = useDispatch();
	if (!inited) {
		inited = true;
		var interval = startCountDown(
			10,
			(t) => {
				dispatch(updateTimer(t));
			},
			() => {
				dispatch(stopTimer());
				clearInterval(interval);
			}
		);
	}
	useEffect(() => {
		return () => {
			clearInterval(interval);
		};
	}, []);
	return (
		<>
			<ThemeProvider theme={theme}>
				<Header />
				<Body />
				<Footer />
			</ThemeProvider>
		</>
	);
}

export default App;
