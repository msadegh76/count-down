import { useContext } from "react";
import styled from "styled-components";

const StyledHamburgerContainer = styled.div`
	.hamburger {
		position: absolute;
		background-color: transparent;
		border: none;
		outline: none;
		cursor: pointer;
		top: 10px;
		right: 15px;
	}
	.line {
		display: block;
		width: 40px;
		height: 3px;
		background-color: #fff;
		margin-block: 10px;
		border-radius: 4px;
		transition: transform 0.5s, opacity 0.25s;
	}
	${(props) =>
		props.open
			? ".line:nth-child(1){transform: translateY(13px)rotate(45deg);}.line:nth-child(2){opacity:0;}.line:nth-child(3){transform: translateY(-13px)rotate(-45deg); }"
			: ""}
`;

export const StyledHamburgerButton = ({ open, handleOpen }) => {
	return (
		<StyledHamburgerContainer open={open}>
			<button type="button" className="hamburger" onClick={handleOpen}>
				<span className="line"></span>
				<span className="line"></span>
				<span className="line"></span>
			</button>
		</StyledHamburgerContainer>
	);
};
