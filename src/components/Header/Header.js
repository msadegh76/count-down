import React from "react";

import { StyledHeader } from "../styles/Header.styled";
import Timer from "../Timer/Timer";

export default function Header() {
	return (
		<>
			<StyledHeader>
				<Timer size={"small"} />
			</StyledHeader>
		</>
	);
}
