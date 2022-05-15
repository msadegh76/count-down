import styled from "styled-components";

export const FlexDiv = styled.div`
	height: ${({ height }) => (height ? `${height}` : "100vh")};
	display: flex;
	flex-direction: ${({ direction }) =>
		direction === "column" ? "column" : "row"};
	justify-content: ${({ justify }) => (justify ? `${justify}` : "center")};
	align-items: ${({ align }) => (align ? `${align}` : "center")};
`;
