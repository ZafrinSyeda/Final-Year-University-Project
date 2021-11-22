import React from "react";
import { useState } from "react";
import "./UserProfile.css";
import logo from "../../resources/bigLogo.png";
import HobbySelect from "../Profile";

export default function UserProfile() {
	const [activeButton, setActiveButton] = useState(0);
	const [hobbies, setHobby] = useState([
		{
			hobby_id: 1,
			name: "Antique Sword Collecting",
		},
		{
			hobby_id: 2,
			name: "Watercolouring",
		},
	]);

	function onButtonClick(hobbySelected) {
		setActiveButton(hobbySelected.hobby_id);
		<HobbySelect hobby={activeButton} />;
		console.log(hobbySelected.hobby_id);
	}

	function HobbyButtons() {
		return (
			<div>
				{hobbies.map((hobby) => (
					<button onClick={onButtonClick(hobby)}>{hobby.name}</button>
				))}
			</div>
		);
	}

	return (
		<div className="userProfile">
			<div className="sideProfile">
				<img src={logo} alt="profile picture"></img>
				<h3>Firstname Surname</h3>
				<p>Description</p>
				<HobbyButtons />
			</div>
		</div>
	);
}
