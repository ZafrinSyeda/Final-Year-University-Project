import React, { useState } from "react";
/* unique ID import */
import { v4 as uuidv4 } from "uuid";
import profilepicture from "../../resources/profilepicture.PNG";

export const AddMessage = ({ type, messages, setMessage }) => {
	const [comment, setComment] = useState("");

	const addComment = (e) => {
		e.preventDefault();
		var postComment;
		switch (type) {
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
		const newComment = [...messages, postComment];
		console.log(newComment);
		setMessage(newComment);
		setComment("");
	};
	return (
		<form className="commentForm" onSubmit={addComment}>
			<img
				src={profilepicture}
				className="profilePictureSm"
				alt="your profile picture"
			/>
			<input
				type="text"
				placeholder="Enter a message"
				onChange={(e) => setComment(e.currentTarget.value)}
				value={comment}
				aria-label="write a message"
			/>
			<button className="commentBtn" disabled={comment == ""}>
				{" "}
				send
			</button>
		</form>
	);
};
