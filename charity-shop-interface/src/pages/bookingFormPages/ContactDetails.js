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
						required
						aria-required
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
						required
						aria-required
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
						required
						aria-required
					/>
				</label>
				<p className="radioGroupLbl">
					*Would you prefer to be contacted by text or email?
				</p>
				<div role="radiogroup">
					<div role="radio" className="collectionRadio">
						<input
							id="textRadio"
							type="radio"
							name="contactType"
							value="text"
							checked={text}
							onChange={() => setText(true)}
							required
							aria-label="select this and enter your phone number below, if you would prefer being contacted by email move to the next option after the text box"
						/>
						<label for="textRadio">Text</label>
					</div>
					{text ? (
						<input
							type="number"
							id="phoneNum"
							name="phoneNum"
							className="longInput"
							value={values.phoneNumber}
							onChange={handleChange("phoneNumber")}
							aria-label="enter phone number"
						/>
					) : null}

					<div role="radio" className="collectionRadio">
						<input
							id="emailRadio"
							type="radio"
							name="contactType"
							value="email"
							checked={!text}
							onChange={() => setText(false)}
							aria-label="select this and enter your email below, if you would prefer being contacted by text move back to the previous option"
						/>
						<label for="emailRadio">Email</label>
					</div>
					{!text ? (
						<input
							type="text"
							id="emailUsr"
							name="email"
							className="longInput"
							value={values.email}
							onChange={handleChange("email")}
							aria-label="enter email address"
						/>
					) : null}
				</div>
			</form>
			{ProgressBtns(false)}
		</div>
	);
};

export default ContactDetails;
