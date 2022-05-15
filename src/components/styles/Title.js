import styled from "styled-components";

export const TitleLarge = styled.h1`
	min-width: ${({ width }) => (width ? `${width}px` : "50px")};
	position: relative;
	font-size: ${({ size }) => (size ? `${size}px` : "32px")};
`;

export const TitleMedium = styled.h1`
	min-width: ${({ width }) => (width ? `${width}px` : "50px")};
	position: relative;
	font-size: ${({ size }) => (size ? `${size}px` : "25px")};
`;
