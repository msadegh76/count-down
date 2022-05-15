import React from "react";
import SideBar from "../SideBar/SideBar";
import Timer from "../Timer/Timer";

export default function Body() {
	return (
		<>
			<SideBar />
			<Timer size={"large"} />
		</>
	);
}
