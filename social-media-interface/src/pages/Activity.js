import React from "react";
import { ActivityComponent } from "./ActivityComponent";
import vinylgirlpfp from "../resources/vinylgirlpfp.jpeg";
import onur from "../resources/onur.jpg";
import personpfp from "../resources/personpfp.jpg";
import paintingpfp from "../resources/paintingpfp.jpg";

const Activity = () => {
	const activityDetail = [
		{
			type: "like",
			username: "Celestina Benedetti",
			profile_pic: vinylgirlpfp,
			date: "2022-01-25T12:11:00Z",
		},
		{
			type: "inspire",
			username: "Celestina Benedetti",
			profile_pic: vinylgirlpfp,
			date: "2022-02-25T12:11:00Z",
		},
		{
			type: "comment",
			username: "Onur Stanton",
			profile_pic: onur,
			comment: "good job!",
			date: "2022-02-25T12:11:00Z",
		},
		{
			type: "like",
			username: "Keshawn Chance",
			profile_pic: paintingpfp,
			date: "2022-02-11T15:11:50Z",
		},
		{
			type: "inspire",
			username: "Miki O'Callaghan",
			profile_pic: personpfp,
			date: "2022-02-03T17:11:50Z",
		},
		{
			type: "comment",
			username: "Miki O'Callaghan",
			profile_pic: personpfp,
			comment: "(*˘︶˘*).｡.:*♡",
			date: "2022-03-03T17:11:50Z",
		},
	];

	return (
		<div className="page">
			<h1>Activity</h1>
			<ActivityComponent
				activity={activityDetail}
				setIndividualMessage={null}
			/>
		</div>
	);
};

export default Activity;
