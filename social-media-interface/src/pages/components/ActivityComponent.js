import React from "react";
/* unique ID import used for mapping */
import { v4 as uuidv4 } from "uuid";

/** Used to represent a box within the user's activity or messages
 *
 * props used:
 * activity: the list item for the activity/ message
 * setIndividualMessage: used to open a message to view all of the messages shared between users
 */
export const ActivityComponent = ({ activity, setIndividualMessage }) => {
	/* Used for the activity page */
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

	/* Used for the message page and activity page to present a body of text written from a follower */
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

	/* Used to sort the activity in reverse chronological order  */
	let sortedActivity = activity
		.sort((a, b) => {
			return new Date(a.date).getTime() - new Date(b.date).getTime();
		})
		.reverse();

	return (
		<div>
			{sortedActivity.map((activity) => (
				<div key={uuidv4()}>
					<button
						className="messagePreview"
						onClick={
							setIndividualMessage != null
								? () => setIndividualMessage(activity.username)
								: null
						}
						tabIndex="0"
					>
						<div className="messageHeader">
							<div className="profileDetails">
								<img
									src={activity.profile_pic}
									className="profilePictureSm"
									alt={activity.username}
								/>
								{activity.username}

								{activityDetail(activity.type)}
							</div>
							<div>
								{/* Used to just show the date and month */}
								{new Date(activity.date).toISOString().substring(5, 10)}
							</div>
						</div>
						<div className="messageTxt">
							{" "}
							{messageBody(activity.type, activity)}{" "}
						</div>
					</button>
					<hr />
				</div>
			))}
		</div>
	);
};
