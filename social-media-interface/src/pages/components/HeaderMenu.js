/* represents the header menu at the top of the page where users can log out, or edit their page
or add a new post */

import React from "react";
import "./Header.css";
import { BiEdit } from "react-icons/bi";

/* Logout: the function in order to log the user out 
EditPage: the function used in order to open the edit page menu
NewPost: the function used in order to display an overlay where users can upload a new post */
export default function HeaderMenu({ Logout, EditPage, NewPost }) {
	return (
		<div className="header">
			{/* this div is displayed on the left side of the screen */}
			<div>
				{/* button used to open the edit profile view */}
				<button
					className="edit"
					name="edit"
					title="edit profile"
					onClick={EditPage}
				>
					<BiEdit size={30} />
				</button>
				{/* button used to upload a new post */}
				<button onClick={NewPost}>New Post</button>
			</div>
			{/* this is displayed on the right side of the screen */}
			{/* button to logout of the account */}
			<button onClick={Logout} className="logout">
				Logout
			</button>
		</div>
	);
}
