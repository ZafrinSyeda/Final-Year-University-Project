import React from "react";
import "./Header.css";
import { BiEdit } from "react-icons/bi";

export default function HeaderMenu({ Logout }) {
	return (
		<div className="header">
			<div>
				<button className="edit" name="edit" title="edit profile">
					<BiEdit size={30} />
				</button>
				<button>New Post</button>
			</div>
			<button onClick={Logout} className="logout">
				Logout
			</button>
		</div>
	);
}
