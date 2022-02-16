/* For the multi-page collection booking form, this page will represent where the user will 
enter the detail about where and when the collection should take place */

import React from "react";
import { useState } from "react";

const TimePlace = ({ nextStep, prevStep, values, handleChange }) => {
	const [collectionTime, setCollectionTime] = useState("");

	const handleOptionChange = (e) => {
		setCollectionTime(e.target.value);
		values.collectionTime = collectionTime;
		handleChange("collectionTime");
	};
	return (
		<div className="defaultContainer">
			<h1 className="formTitle"> Collection Address </h1>
			<p className="subtitle">
				Enter the address where you will be leave your donation to be collected{" "}
			</p>
			<form>
				<label>
					*Address Line 1
					<input
						type="text"
						id="address1"
						name="address1"
						value={values.addressLine1}
						onChange={handleChange("addressLine1")}
					/>
				</label>
				<label>
					*Address Line 2
					<input
						type="text"
						id="address2"
						name="address2"
						value={values.addressLine2}
						onChange={handleChange("addressLine2")}
					/>
				</label>
				<label>
					*Town/ City
					<input
						type="text"
						id="towncity"
						name="towncity"
						value={values.townCity}
						onChange={handleChange("townCity")}
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
					/>
				</label>
			</form>

			<hr />
			<h1 className="formTitle"> Collection Time </h1>
			<p className="subtitle">
				Please select the most convient date and time for when you would like
				your collection to be picked up
			</p>
			<form>
				<label>
					*Select Date
					<input
						type="date"
						id="collectiondate"
						name="collectiondate"
						value={values.collectionDate}
						onChange={handleChange("collectionDate")}
					/>
				</label>
				*Select Time
				<label>
					<input
						type="radio"
						name="am"
						value="A.M. (9:00 - 12:00)"
						checked={collectionTime === "A.M. (9:00 - 12:00)"}
						onChange={handleOptionChange}
					/>
					A.M. (9:00 - 12:00)
				</label>
				<label>
					<input
						type="radio"
						name="pm"
						value="PM (12:00 - 17:00)"
						checked={collectionTime === "PM (12:00 - 17:00)"}
						onChange={handleOptionChange}
					/>
					PM (12:00 - 17:00)
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

export default TimePlace;
