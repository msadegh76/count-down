import { FlexDiv } from "../styles/FlexDiv";
import { TitleLarge, TitleMedium } from "../styles/Title";
import { useSelector } from "react-redux";

import { convertTime } from "../../service/count-down.service";
import { ClockIcon } from "../../svg/svg";
export default function Timer({ size }) {
	const secondTime = useSelector((state) => state.timer);
	const timerState = useSelector((state) => state.timerState);
	const { hour, min, sec } = convertTime(secondTime);
	return (
		<>
			{size !== "small" && (
				<>
					<FlexDiv height={"500px"}>
						<TitleLarge>{hour} :</TitleLarge>

						<TitleLarge>{min} :</TitleLarge>

						<TitleLarge>{sec}</TitleLarge>
						<ClockIcon size={50} />
					</FlexDiv>
					<FlexDiv>
						<h1>{timerState === "deactive" && "TIMER FINISHED"}</h1>
					</FlexDiv>
				</>
			)}
			{size === "small" && (
				<>
					<FlexDiv height={"100%"}>
						<TitleMedium>{hour} :</TitleMedium>{" "}
						<TitleMedium>{min} :</TitleMedium>
						<TitleMedium>{sec}</TitleMedium>
						<ClockIcon size={20} />
					</FlexDiv>
				</>
			)}
		</>
	);
}
