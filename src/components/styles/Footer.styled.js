import styled from "styled-components";

export const StyledFooter = styled.div`
	position: fixed;
	bottom: 0px;
	width: 100vw;
	height: 5vh;
	z-index: 0;
	background-color: ${({ theme }) => theme.light_red};
`;
