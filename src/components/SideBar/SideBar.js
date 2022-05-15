import React, { useState } from "react";
import { ClockIcon } from "../../svg/svg";
import { StyledHamburgerButton } from "../styles/HamburgerButton.styled";
import { StyledSidebar } from "../styles/Sidebar.styled";
import SideBarItem from "./SidebarItem";

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
			<SideBarItem icon={<ClockIcon size={40} color={"white"} />} />
		</StyledSidebar>
	);
}
