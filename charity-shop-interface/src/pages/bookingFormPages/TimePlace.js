/* For the multi-page collection booking form, this page will represent where the user will 
enter the detail about where and when the collection should take place */

import React from "react";

const TimePlace = ({ values, handleChange, ProgressBtns, ProgressBar }) => {
	return (
		<div className="defaultContainer">
			<ProgressBar />
			<h1 className="formTitle"> Collection Address </h1>
			<p className="subtitle">
				Enter the address where you will be leave your donation to be collected{" "}
			</p>
			<form className="collectionForm">
				<label className="collectionLbl">
					*Address Line 1
					<input
						type="text"
						id="address1"
						name="address1"
						className="longInput"
						value={values.addressLine1}
						onChange={handleChange("addressLine1")}
						required
						aria-required
					/>
				</label>
				<label>
					*Address Line 2
					<input
						type="text"
						id="address2"
						name="address2"
						className="longInput"
						value={values.addressLine2}
						onChange={handleChange("addressLine2")}
						required
						aria-required
					/>
				</label>
				<label>
					*Town/ City
					<input
						type="text"
						id="towncity"
						name="towncity"
						className="longInput"
						value={values.townCity}
						onChange={handleChange("townCity")}
						required
						aria-required
					/>
				</label>
				<label>
					*Postcode
					<input
						type="text"
						id="postcode"
						name="postcode"
						value={values.postcode}
						onChange={handleChange("postcode")}
						required
						aria-required
					/>
				</label>
			</form>

			<hr />
			<h1 className="formTitle"> Collection Time </h1>
			<p className="subtitle">
				Please select the most convient date and time for when you would like
				your collection to be picked up
			</p>
			<form className="collectionForm">
				<label>
					*Select Date
					<input
						type="date"
						id="collectiondate"
						name="collectiondate"
						value={values.collectionDate}
						onChange={handleChange("collectionDate")}
						required
						aria-required
					/>
				</label>
				<p className="radioGroupLbl">*Select Time</p>

				<label className="radioGroup">
					<input
						type="radio"
						name="chooseTime"
						value="A.M. (9:00 - 12:00)"
						checked={values.collectionTime === "A.M. (9:00 - 12:00)"}
						onChange={handleChange("collectionTime")}
						required
					/>
					A.M. (9:00 - 12:00)
				</label>

				<label>
					<input
						type="radio"
						name="chooseTime"
						value="PM (12:00 - 17:00)"
						checked={values.collectionTime === "PM (12:00 - 17:00)"}
						onChange={handleChange("collectionTime")}
					/>
					PM (12:00 - 17:00)
				</label>
			</form>
			{ProgressBtns(false)}
		</div>
	);
};

export default TimePlace;
