/* For the multi-page collection booking form, this page will be displayed to the user once they have 
confirmed everything */

import React from "react";
import calendarConfirm from "../../resources/calendarConfirm.png";

const success = () => {
	return (
		<div className="successPage">
			<img
				className="container-img-xs"
				src={calendarConfirm}
				alt="calendar confirmation"
			></img>
			<h1>Successful Booking!</h1>
			<p>
				You have successfully booked a donation collection! We will contact you
				as soon as possible to confirm this to you and provide updates{" "}
			</p>
		</div>
	);
};

export default success;
