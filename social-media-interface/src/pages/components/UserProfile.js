import React from "react";
import "./UserProfile.css";
import logo from "../../resources/bigLogo.png";

export default function UserProfile() {
	return (
		<div className="userProfile">
			<div className="sideProfile">
				<img src={logo} alt="profile picture"></img>
				<h3>Firstname Surname</h3>
				<p>Description</p>
				<button>hobby #1</button>
			</div>
		</div>
	);
}
