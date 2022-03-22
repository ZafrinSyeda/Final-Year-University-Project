import React, { useState } from "react";
/* unique ID import */
import { v4 as uuidv4 } from "uuid";
/* user's profile picture */
import profilepicture from "../../resources/profilepicture.PNG";

/** component that allows the user to enter a message and send it somewhere
 *
 * props used:
 * type: either message or comment
 * messages: all of the previous messages/ comments
 * setMessage: set the message to the message the user entered
 */
export const AddMessage = ({ type, messages, setMessage }) => {
	/* user's comment */
	const [comment, setComment] = useState("");

	/* takes the user's input and sets the message body with the user's comment */
	const addComment = (e) => {
		e.preventDefault();
		/* removes trailing and leading whitespaces - to not accept strings of that nature */
		if (comment.trim() === "") {
			return;
		}
		var postComment;
		switch (type) {
			/* depending on the nature of where the message is being sent the format of the array may be different */
			case "comment":
				postComment = {
					username: "Makayla Madelynn Kovačić",
					profile_pic: profilepicture,
					id: uuidv4(),
					message: comment.trim(),
				};
				break;
			case "message":
				postComment = {
					type: "send",
					username: "Makayla Madelynn Kovačić",
					profile_pic: profilepicture,
					id: uuidv4(),
					message: comment.trim(),
					date: new Date(),
				};
				break;
			default:
				postComment = null;
				break;
		}
		/* updates the message */
		const newComment = [...messages, postComment];
		setMessage(newComment);
		setComment("");
	};
	return (
		<form className="commentForm" onSubmit={addComment}>
			{/* user is presented with their own profile picture, a textbox and a  send button */}
			<img
				src={profilepicture}
				className="profilePictureSm"
				alt="your profile"
			/>
			<input
				type="text"
				placeholder="Enter a message"
				onChange={(e) => setComment(e.currentTarget.value)}
				value={comment}
				aria-label="write a message"
			/>
			<button className="commentBtn" disabled={comment === ""}>
				{" "}
				send
			</button>
		</form>
	);
};
