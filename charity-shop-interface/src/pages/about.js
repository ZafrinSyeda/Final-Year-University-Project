import React from "react";

const about = () => {
	return (
		<div className="defaultContainer">
			<h1 className="title">About Us</h1>
			<h1 className="left-h1">Our Mission Statement</h1>
			<p>
				Here at Charity Shop Helper, we are a non-profit organisation that is
				dedicated to helping out a number of charities within the UK. We believe
				that charity work is very important, and we want to do all we can to
				ensure that all of our partner charities are able to fundraise as much
				as possible to donate to their wonderful causes.
			</p>
			<h1 className="left-h1">How Can You Help Out?</h1>
			<p>
				There is a number of different ways you can help one of our partner
				charities:
			</p>

			<div className="threeContainer">
				<div className="containerItem">
					<h2>Arrange a donation collection with us!</h2>
					<p className="sm-p">
						Have any old clothes or furniture lying around? We can come over to
						pick up any large items and send them to one of our partner
						charities of your choice so they can be sold at their shops.
					</p>
				</div>
				<div className="containerItem">
					<h2>Take a look at our online shop!</h2>
					<p className="sm-p">
						On our website we can sell a number of clothes and goods where all
						proceeds will go to charity. Take a look - we add new stuff every
						week!
					</p>
				</div>
				<div className="containerItem">
					<h2>Donate some money for a good cause!</h2>
					<p className="sm-p">
						You can donate money to a charity of your choice from our website if
						there is a cause that you are passionate about
					</p>
				</div>
			</div>
		</div>
	);
};

export default about;
