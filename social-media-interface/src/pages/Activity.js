import React from "react";
/* used to represent the individual activity components in the activity  */
import { ActivityComponent } from "./components/ActivityComponent";
/* images used */
import vinylgirlpfp from "../resources/vinylgirlpfp.jpeg";
import onur from "../resources/onur.jpg";
import personpfp from "../resources/personpfp.jpg";
import paintingpfp from "../resources/paintingpfp.jpg";

const Activity = () => {
	/* array with the details of the nature of the user's activity */
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

	/* presents each of the activity details within an activity component */
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
