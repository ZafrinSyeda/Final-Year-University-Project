import React, { useState } from "react";
/* used to represent the individual message components when in the activity-like view  */
import { ActivityComponent } from "./components/ActivityComponent";
/* allows users to send a comment on a post */
import { AddMessage } from "./components/AddMessage";
/* stylesheet */
import "./Profile.css";
/*images*/
import vinylgirlpfp from "../resources/vinylgirlpfp.jpeg";
import onur from "../resources/onur.jpg";
import personpfp from "../resources/personpfp.jpg";
import paintingpfp from "../resources/paintingpfp.jpg";
import profilepicture from "../resources/profilepicture.PNG";

/* list to hold the details of the user's message */
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
			type: "message",
			username: "Celestina Benedetti",
			profile_pic: vinylgirlpfp,
			recent_message: conversation[conversation.length - 1].message,
			date: conversation[conversation.length - 1].date,
		},
		{
			type: "message",
			username: "Onur Stanton",
			profile_pic: onur,
			recent_message:
				"i have a request 4 u this is a once in a lifetime opportunity so please hear me out because Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			date: "2022-02-25T12:11:00Z",
		},
		{
			type: "message",
			username: "Keshawn Chance",
			profile_pic: paintingpfp,
			recent_message: "OMG NO WAY!!",
			date: "2022-02-11T15:11:50Z",
		},
		{
			type: "message",
			username: "Miki O'Callaghan",
			profile_pic: personpfp,
			recent_message: "(╯✧▽✧)╯",
			date: "2022-02-03T17:11:50Z",
		},
	];

	/* allows user to show the messages between the user and an individual if it's set to the 
	individual's username */
	const [individualMessage, setIndividualMessage] = useState("");

	/* shows the messages between the user and an individual */
	const SingleConversation = () => {
		return (
			<div className="convo">
				{/* goes back to the activity-like view of the messages */}
				<button onClick={() => setIndividualMessage("")} className="commentBtn">
					Back
				</button>
				<h2>{individualMessage}</h2>
				<div className="convoContent">
					{/* displays message on the left or right depending on whether the user is the 
					sender or the reciever of the message */}
					{conversation.map((message) =>
						message.type === "recieve" ? (
							<div className="recievedMsg">
								<img
									src={message.profile_pic}
									className="profilePictureSm"
									alt="reciever"
								/>
								<div>{message.message}</div>
							</div>
						) : (
							<div className="sentMsg">
								<div>{message.message}</div>
								<img
									src={message.profile_pic}
									className="profilePictureSm"
									alt="your profile"
								/>
							</div>
						)
					)}
				</div>
				{/* allows the user to add a message in a textbox */}
				<div className="addMessage">
					<AddMessage
						type={"message"}
						messages={conversation}
						setMessage={setConversation}
					/>
				</div>
			</div>
		);
	};

	/* shows the activity-like section displaying the messages the user had */
	const AllMessages = () => {
		return (
			<div>
				<h1>Messages</h1>
				{/* presents the message details in the form of an activity component */}
				<ActivityComponent
					activity={messengerDetail}
					setIndividualMessage={setIndividualMessage}
				/>
			</div>
		);
	};

	return (
		<div className="page">
			{/* only shows the messages when one user has been selected */}
			{individualMessage === "Celestina Benedetti" ? (
				<SingleConversation />
			) : (
				<AllMessages />
			)}
		</div>
	);
};

export default Messages;
