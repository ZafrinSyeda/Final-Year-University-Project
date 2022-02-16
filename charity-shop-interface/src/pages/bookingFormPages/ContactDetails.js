/* For the multi-page collection booking form, this page will represent where the user will 
enter contact details such as name, phone number, email */

import React from "react";

const ContactDetails = ({ nextStep, prevStep, values, handleChange }) => {
	return (
		<div className="defaultContainer">
			<h1 className="formTitle"> Contact Details </h1>
			<p className="subtitle">
				We will just need some information about your preferred method of
				contact{" "}
			</p>
			<form>
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
						value={values.surname}
						onChange={handleChange("surname")}
					/>
				</label>
			</form>
			<div className="horizontalAlign">
				<button className="progressFormBtn" onClick={prevStep}>
					Previous{" "}
				</button>
				<button className="progressFormBtn" onClick={nextStep}>
					Next{" "}
				</button>
			</div>
		</div>
	);
};

export default ContactDetails;
