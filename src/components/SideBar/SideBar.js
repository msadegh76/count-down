import React, { useState } from "react";
import { StyledHamburgerButton } from "../styles/HamburgerButton.styled";
import { StyledSidebar } from "../styles/Sidebar.styled";

export default function SideBar() {
	const [sidebarState, setSidebarState] = useState(false);
	const handleOpen = () => {
		setSidebarState(!sidebarState);
	};

	return (
		<StyledSidebar open={sidebarState}>
			<div className="side-bar-top">
				<StyledHamburgerButton open={sidebarState} handleOpen={handleOpen} />
			</div>
		</StyledSidebar>
	);
}
