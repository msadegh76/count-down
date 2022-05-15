import styled from "styled-components";

export const StyledHeader = styled.div`
	position: fixed;
	width: 100vw;
	height: 5vh;
	z-index: 0;
	background-color: ${({ theme }) => theme.light_red};
`;
