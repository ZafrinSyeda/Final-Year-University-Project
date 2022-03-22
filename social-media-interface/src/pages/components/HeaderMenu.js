import React from "react";
/* stylesheet */
import "./Header.css";

/* represents the header menu at the top of the page where users can log out */
/* Logout: the function in order to log the user out  */
export default function HeaderMenu({ Logout }) {
	return (
		<div className="header">
			<div />
			{/* this is displayed on the right side of the screen */}
			{/* button to logout of the account */}
			<button onClick={Logout} className="logout">
				Logout
			</button>
		</div>
	);
}
