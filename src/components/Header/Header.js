import React from "react";
import { useCountDownContext } from "../../contexts/ManageCountDownContext";
import { FlexDiv } from "../styles/FlexDiv";
import { StyledHeader } from "../styles/Header.styled";
import { TitleMedium } from "../styles/Title";

export default function Header() {
	const {
		timer: { hour, min, sec },
	} = useCountDownContext();
	return (
		<>
			<StyledHeader>
				<FlexDiv height={"100%"}>
					<TitleMedium>{hour} :</TitleMedium> <TitleMedium>{min} :</TitleMedium>
					<TitleMedium>{sec}</TitleMedium>
				</FlexDiv>
			</StyledHeader>
		</>
	);
}
