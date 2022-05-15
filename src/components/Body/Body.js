import React from "react";
import { useCountDownContext } from "../../contexts/ManageCountDownContext";
import SideBar from "../SideBar/SideBar";
import { FlexDiv } from "../styles/FlexDiv";
import { TitleLarge } from "../styles/Title";

export default function Body() {
	const {
		timer: { hour, min, sec },
	} = useCountDownContext();
	return (
		<>
			<SideBar />
			<FlexDiv>
				<TitleLarge size={50} width={70}>
					{hour} :
				</TitleLarge>

				<TitleLarge size={50} width={70}>
					{min} :
				</TitleLarge>

				<TitleLarge size={50} width={70}>
					{sec}
				</TitleLarge>
			</FlexDiv>
		</>
	);
}
