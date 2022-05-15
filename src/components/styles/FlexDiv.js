import styled from "styled-components";

export const FlexDiv = styled.div`
	height: ${({ height }) => (height ? `${height}` : "100%")};
	display: flex;
	flex-direction: ${({ direction }) =>
		direction === "column" ? "column" : "row"};
	justify-content: ${({ justify }) => (justify ? `${justify}` : "center")};
	align-items: ${({ align }) => (align ? `${align}` : "center")};
	padding: ${({ padding }) => (padding ? padding : "0px 0px")};
`;
