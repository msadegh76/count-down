import styled from "styled-components";

export const TitleLarge = styled.h1`
	min-width: ${({ width }) => (width ? `${width}px` : "50px")};
	position: relative;
	font-size: ${({ size }) => (size ? `${size}px` : "32px")};
`;

export const TitleMedium = styled.h1`
	min-width: ${({ width }) => (width ? `${width}` : "50px")};
	position: relative;
	font-size: ${({ size }) => (size ? `${size}px` : "25px")};
	text-align: center;
	line-height: 0;
	color: ${({ color }) => (color ? color : "#00000")};
	padding: ${({ padding }) => (padding ? padding : "0px 0px")};
`;
