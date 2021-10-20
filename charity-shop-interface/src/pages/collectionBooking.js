/* represents the collection booking form for the website. A majority of the interface will be focused on this form */

import React from "react";
import "../App.css";

import background from "../resources/booking_bg.jpg";
import calendar from "../resources/calendar.png";
import truck from "../resources/truck.png";
import boxes from "../resources/delivery_boxes.png";

const scrollTop = () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
};

const CollectionBooking = () => {
	return (
		<div>
			<div
				style={{
					backgroundImage: `url(${background})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
			>
				<h1 className="title">
					Book a free collection on any unwanted goods today
				</h1>
				<div className="collectionStart">
					<p>
						We will take in anything you can’t carry yourself to a shop - this
						includes furniture, electricals, and bags/ boxes of donations - and
						send it to the charity shop for you. But in order to that, we’ll
						need your help here:
					</p>
					<button className="startBooking">
						Click here to start your booking
					</button>
					<p>Or scroll below to learn more about the booking process...</p>
				</div>
			</div>
			<h1 className="title">How it works</h1>
			<div className="threeContainer">
				<div className="containerItem">
					<img className="container-img" src={boxes}></img>
					<p>1. You’ll tell us what you want to be collected </p>
				</div>
				<div className="containerItem">
					<img className="container-img" src={calendar}></img>
					<p>
						2. You’ll tell us when and where to collect your donation, and give
						us some contact details
					</p>
				</div>
				<div className="containerItem">
					<img className="container-img" src={truck}></img>
					<p>
						3. We will send someone to collect your donation to send to our
						charity shop
					</p>
				</div>
				<button className="topScrollButton" onClick={scrollTop}>
					Go to the top of the page to start
				</button>
			</div>
		</div>
	);
};

export default CollectionBooking;
