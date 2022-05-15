import styled from "styled-components";

export const StyledSidebar = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	width: 250px;
	height: 100vh;
	left: -180px;
	top: 0px;
	z-index: 1;
	-webkit-transform: ${(props) =>
		props.open ? "translateX(180px)" : "translateX(0)"};
	transform: ${(props) => (props.open ? "translateX(180px)" : "translateX(0)")};
	-webkit-transition: 0.3s ease all;
	transition: 0.3s ease all;
	background-color: ${({ theme }) => theme.dark_blue};
	.side-bar-top {
		width: 100%;
		height: 65px;
		background-color: #181824;
		display: flex;
		flex-direction: row;
	}
`;
