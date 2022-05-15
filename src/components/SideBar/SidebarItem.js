import { FlexDiv } from "../styles/FlexDiv";
import { TitleMedium } from "../styles/Title";

export default function SideBarItem({ icon }) {
	return (
		<FlexDiv justify={"flex-end"} height={"100px"} padding={"0px 15px"}>
			<TitleMedium padding={"0px 20px"} color={"white"} width={"60%"}>
				timer
			</TitleMedium>
			{icon}
		</FlexDiv>
	);
}
