/* Replaces the header when the user is editing their page so that they can't logout or try to upload
a post mid-editing through the page */
import React from "react";
import "./Header.css";

export default function EditMenu({ CloseEdit }) {
	return (
		<div className="header">
			{/* the user will be able to update their theme from this menu - though
			this feature is not complete yet */}
			<div>
				Change Theme:
				<button className="themeButton monochromeBtn" />
				<button className="themeButton coffeeshopBtn" />
			</div>
			<button onClick={CloseEdit}>Close</button>
		</div>
	);
}
