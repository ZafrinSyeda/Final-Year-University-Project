/* For the multi-page collection booking form, this page will represent where the user will 
enter contact details such as name, phone number, email */

import React from "react";
import { useState } from "react";

const ContactDetails = ({
	values,
	handleChange,
	setText,
	text,
	ProgressBtns,
	ProgressBar,
}) => {
	//const [text, setText] = useState(true);
	return (
		<div className="defaultContainer">
			<ProgressBar />
			<h1 className="formTitle"> Contact Details </h1>
			<p className="subtitle">
				We will just need some information about your preferred method of
				contact{" "}
			</p>
			<form className="collectionForm">
				<label>
					*Title
					<input
						type="text"
						id="title"
						name="title"
						value={values.title}
						onChange={handleChange("title")}
					/>
				</label>
				<label>
					*Forename
					<input
						type="text"
						id="forename"
						name="forename"
						className="longInput"
						value={values.forename}
						onChange={handleChange("forename")}
					/>
				</label>
				<label>
					*Surname
					<input
						type="text"
						id="surname"
						name="surname"
						className="longInput"
						value={values.surname}
						onChange={handleChange("surname")}
					/>
				</label>
				<p className="radioGroupLbl">
					*Would you prefer to be contacted by text or email?
				</p>
				<label>
					<input
						id="textRadio"
						type="radio"
						name="text"
						value="text"
						checked={text}
						onChange={() => setText(true)}
					/>
					Text
					{text ? (
						<input
							type="number"
							id="phoneNum"
							name="amount"
							className="longInput"
							value={values.phoneNumber}
							onChange={handleChange("phoneNumber")}
						/>
					) : null}
				</label>
				<label>
					<input
						type="radio"
						name="email"
						value="email"
						checked={!text}
						onChange={() => setText(false)}
					/>
					Email
					{!text ? (
						<input
							type="text"
							id="emailUsr"
							name="email"
							className="longInput"
							value={values.email}
							onChange={handleChange("email")}
						/>
					) : null}
				</label>
			</form>
			{ProgressBtns(false)}
		</div>
	);
};

export default ContactDetails;
