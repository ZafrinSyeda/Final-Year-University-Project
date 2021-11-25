import React from "react";
import "./Header.css";
import { BiEdit } from "react-icons/bi";

export default function HeaderMenu({ Logout, EditPage, NewPost }) {
	return (
		<div className="header">
			<div>
				<button
					className="edit"
					name="edit"
					title="edit profile"
					onClick={EditPage}
				>
					<BiEdit size={30} />
				</button>
				<button onClick={NewPost}>New Post</button>
			</div>
			<button onClick={Logout} className="logout">
				Logout
			</button>
		</div>
	);
}
