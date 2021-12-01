/* represents the collection booking form for the website. A majority of the interface will be focused on this form */

import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

import background from "../resources/booking_bg.jpg";
import calendar from "../resources/calendar.png";
import truck from "../resources/truck.png";
import boxes from "../resources/delivery_boxes.png";

/* Function to allow for the user to automatically go back to the start of the page */
const scrollTop = () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
};

const CollectionBooking = () => {
	return (
		<div>
			{/*Using a background image to catch users eyes a bit more*/}
			<div
				style={{
					backgroundImage: `url(${background})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
			>
				<h1 className="title" data-testid="bookingTitle">
					Book a free collection on any unwanted goods today
				</h1>
				<div className="collectionStart">
					<p> </p>
					<p>
						We will take in anything you can’t carry yourself to a shop - this
						includes furniture, electricals, and bags/ boxes of donations - and
						send it to the charity shop for you. But in order to that, we’ll
						need your help here:
					</p>
					{/* The button will send a user to the beginning of the collection form */}
					<Link to="/book-collection/collection-form">
						<button className="startBooking">
							Click here to start your booking
						</button>
					</Link>
					<p> </p>
					<p>Or scroll below to learn more about the booking process...</p>
				</div>
			</div>
			{/* Provides some brief information about how the collection process works */}
			<div className="defaultContainer">
				<h1 className="title">How it works</h1>

				<div className="threeContainer">
					<div className="containerItem">
						<img className="container-img" src={boxes} alt="box"></img>
						<p>1. You’ll tell us what you want to be collected </p>
					</div>
					<div className="containerItem">
						<img className="container-img" src={calendar} alt="calendar"></img>
						<p>
							2. You’ll tell us when and where to collect your donation, and
							give us some contact details
						</p>
					</div>
					<div className="containerItem">
						<img className="container-img" src={truck} alt="truck"></img>
						<p>
							3. We will send someone to collect your donation to send to our
							charity shop
						</p>
					</div>
				</div>
				<button className="cshButton" onClick={scrollTop}>
					Return to start of page
				</button>
			</div>
		</div>
	);
};

export default CollectionBooking;
