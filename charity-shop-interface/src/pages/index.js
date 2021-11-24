/* Represents the 'home' page for the website */

import React from "react";
import charity2Promo from "../resources/charity2promo.jpg";

const Home = () => {
	return (
		<div className="homePage">
			<div
				style={{
					backgroundImage: `url(${charity2Promo})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
			>
				<div className="homePromo">
					<h1 className="title">Introducing, Charity 2! </h1>
					<p>
						We are very excited to introduce Charity 2, as one our newest
						charities that we will be supporting here at Charity Shop Helper! It
						is a wonderful charity that specialises in cat rescue!
					</p>
				</div>
			</div>
			<p />
			<h1>New to Charity Shop Helper?</h1>
			<p>
				There is a number of different ways you can help one of our partner
				charities:
			</p>

			<div className="threeContainer">
				<div className="containerItem">
					<a href="/shop" className="pageLink">
						{" "}
						<h2>Take a look at our online shop! </h2>
					</a>
					<p className="sm-p">
						On our website we can sell a number of clothes and goods where all
						proceeds will go to our partner charities. Take a look - we add new
						stuff every week!
					</p>
				</div>
				<div className="containerItem">
					<a href="/book-collection" className="pageLink">
						{" "}
						<h2>Arrange a donation collection with us! </h2>
					</a>
					<p className="sm-p">
						Have any old clothes or furniture lying around? We can come over to
						pick up any large items and send them to one of our partner
						charities of your choice so they can be sold at their shops.
					</p>
				</div>

				<div className="containerItem">
					<a href="/make-donation" className="pageLink">
						{" "}
						<h2>Donate some money for a good cause!</h2>
					</a>
					<p className="sm-p">
						You can donate money to a charity of your choice from our website if
						there is a cause that you are passionate about
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
