import React, { useState } from "react";
/* stylesheet */
import "./Profile.css";
/*images*/
import vinylgirlpfp from "../resources/vinylgirlpfp.jpeg";
import onur from "../resources/onur.jpg";
import personpfp from "../resources/personpfp.jpg";
import paintingpfp from "../resources/paintingpfp.jpg";
import profilepicture from "../resources/profilepicture.PNG";

const Messages = () => {
	const [conversation, setConversation] = useState([
		{
			type: "recieve",
			username: "Celestina Benedetti",
			profile_pic: vinylgirlpfp,
			id: "celestina1",
			message: "heyy! i love your art!",
			date: "2022-01-25T12:10:00Z",
		},
		{
			type: "send",
			username: "Makayla Madelynn Kovačić",
			profile_pic: profilepicture,
			id: "makayla1",
			message: "aw! thank you so much!! <3",
			date: "2022-01-25T12:30:20Z",
		},
		{
			type: "recieve",
			username: "Celestina Benedetti",
			profile_pic: vinylgirlpfp,
			id: "celestina2",
			message: "i was wondering, what inspires you?",
			date: "2022-01-25T13:11:00Z",
		},
	]);

	const messengerDetail = [
		{
			username: "Celestina Benedetti",
			profile_pic: vinylgirlpfp,
			recent_message: conversation[conversation.length - 1].message,
			date: conversation[conversation.length - 1].date,
		},
		{
			username: "Onur Stanton",
			profile_pic: onur,
			recent_message:
				"i have a request 4 u this is a once in a lifetime opportunity so please hear me out because Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			date: "2022-02-25T12:11:00Z",
		},
		{
			username: "Keshawn Chance",
			profile_pic: paintingpfp,
			recent_message: "OMG NO WAY!!",
			date: "2022-02-11T15:11:50Z",
		},
		{
			username: "Miki O'Callaghan",
			profile_pic: personpfp,
			recent_message: "(╯✧▽✧)╯",
			date: "2022-02-03T17:11:50Z",
		},
	];

	const [individualMessage, setIndividualMessage] = useState("");

	/* Sorts the messages in reverse chronological order so the most recently sent one appears first */
	let sortedMessages = messengerDetail
		.sort((a, b) => {
			return new Date(a.date).getTime() - new Date(b.date).getTime();
		})
		.reverse();

	const SingleConversation = () => {
		return (
			<div>
				<button onClick={() => setIndividualMessage("")}>back</button>
				<h2>{individualMessage}</h2>
			</div>
		);
	};

	const AllMessages = () => {
		console.log(individualMessage);
		return (
			<div>
				<h1>Messages</h1>
				{sortedMessages.map((message) => (
					<div key={message.username}>
						<div
							className="messagePreview"
							onClick={() => setIndividualMessage(message.username)}
						>
							<div className="messageHeader">
								<div className="profileDetails">
									<img src={message.profile_pic} className="profilePictureSm" />
									{message.username}
								</div>
								<div>
									{new Date(message.date).toISOString().substring(5, 10)}
								</div>
							</div>
							<div className="messageTxt">{message.recent_message} </div>
						</div>
						<hr />
					</div>
				))}
				;
			</div>
		);
	};

	return (
		<div className="page">
			{individualMessage === "Celestina Benedetti" ? (
				<SingleConversation />
			) : (
				<AllMessages />
			)}
		</div>
	);
};

export default Messages;
