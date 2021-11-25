import React from "react";
import { useState } from "react";
import "./Header.css";

export default function EditMenu({ CloseEdit }) {
	return (
		<div className="header">
			<div>Change Theme:</div>
			<button onClick={CloseEdit}>Close</button>
		</div>
	);
}
