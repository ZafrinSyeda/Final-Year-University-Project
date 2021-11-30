/* This page is to represent the 'about us' page where a user can find out more about the company
 and the partner charities */
import React from "react";
import charity1 from "../resources/charity1.png";
import charity2 from "../resources/charity2.png";
import charity3 from "../resources/charity3.png";

const about = () => {
	return (
		<div className="defaultContainer">
			<h1 className="title" data-testid="aboutTitle">
				About Us
			</h1>
			{/* Provides information about charity shop helper */}
			<h1 className="leftH1">Our Mission Statement</h1>
			<p>
				Here at Charity Shop Helper, we are a non-profit organisation that is
				dedicated to helping out a number of charities within the UK. We believe
				that charity work is very important, and we want to do all we can to
				ensure that all of our partner charities are able to fundraise as much
				as possible to donate to their wonderful causes.
			</p>

			{/* Provides information about the partner charities */}
			<h1 className="leftH1">Our Partner Charities</h1>
			<div className="threeContainer">
				<div className="containerItem">
					<img className="container-img" src={charity1} alt="charity1"></img>
					<p>
						<b>Charity 1 </b>
					</p>
					<p className="description">description</p>
				</div>
				<div className="containerItem">
					<img className="container-img" src={charity2} alt="charity2"></img>
					<p>
						<b>Charity 2 </b>
					</p>
					<p className="description">description</p>
				</div>
				<div className="containerItem">
					<img className="container-img" src={charity3} alt="charity3"></img>
					<p>
						<b>Charity 3 </b>
					</p>
					<p className="description">description</p>
				</div>
			</div>
		</div>
	);
};

export default about;
