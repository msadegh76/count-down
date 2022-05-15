import { ThemeProvider } from "styled-components";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { ManageCountDownContext } from "./contexts/ManageCountDownContext";
function App() {
	const theme = {
		light_red: "#dc3545",
		dark_blue: "#1e1e2d",
		deep_blue: "#188124",
	};
	return (
		<>
			<ManageCountDownContext>
				<ThemeProvider theme={theme}>
					<Header />
					<Body />
					{/* <Footer /> */}
				</ThemeProvider>
			</ManageCountDownContext>
		</>
	);
}

export default App;
