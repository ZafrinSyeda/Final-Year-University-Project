import React from "react";
/* unique ID import */
import { v4 as uuidv4 } from "uuid";

export const ActivityComponent = ({ activity, setIndividualMessage }) => {
	function activityDetail(activityType) {
		switch (activityType) {
			case "like":
				return <div>liked your post</div>;
			case "inspire":
				return <div>is inspired by your post</div>;
			case "comment":
				return <div>commented:</div>;
			default:
				return null;
		}
	}

	function messageBody(activityType, activity) {
		switch (activityType) {
			case "message":
				return <div>{activity.recent_message}</div>;
			case "comment":
				return <div> {activity.comment}</div>;
			default:
				return null;
		}
	}

	let sortedActivity = activity
		.sort((a, b) => {
			return new Date(a.date).getTime() - new Date(b.date).getTime();
		})
		.reverse();

	return (
		<div>
			{sortedActivity.map((activity) => (
				<div key={uuidv4()}>
					<div
						className="messagePreview"
						onClick={
							setIndividualMessage != null
								? () => setIndividualMessage(activity.username)
								: null
						}
					>
						<div className="messageHeader">
							<div className="profileDetails">
								<img src={activity.profile_pic} className="profilePictureSm" />
								{activity.username}

								{activityDetail(activity.type)}
							</div>
							<div>
								{new Date(activity.date).toISOString().substring(5, 10)}
							</div>
						</div>
						<div className="messageTxt">
							{" "}
							{messageBody(activity.type, activity)}{" "}
						</div>
					</div>
					<hr />
				</div>
			))}
		</div>
	);
};
