/* Represents the 'home' page for the website */

import React from "react";
/* The image used to advertise charity 2 as a new partner */
import charity2Promo from "../resources/charity2promo.jpg";

const Home = () => {
	return (
		<div className="homePage">
			{/* Allows for a background image for the promo*/}
			<div
				style={{
					backgroundImage: `url(${charity2Promo})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
			>
				{/* Often home pages have some type of promotion to show something new that was added to the page,
				 so this div represents that */}
				<div className="homePromo">
					<h1 className="promo">
						Charity Shop Helper is now a proud partner with Charity 2!{" "}
					</h1>
					<p>
						We are very excited to introduce Charity 2, as one our newest
						charities that we will be supporting here at Charity Shop Helper! It
						is a wonderful charity that specialises in cat rescue!
					</p>
				</div>
			</div>
			<p />
			{/* Provides with different features that can be accessed from the website with a more detailled
			 description of what the feature should entail, and provides links to the respective pages */}
			<h1>New to Charity Shop Helper?</h1>
			<p>
				There is a number of different ways you can help one of our partner
				charities:
			</p>

			<div className="threeContainer">
				<div className="containerItem">
					<a href="/shop" className="pageLink">
						{" "}
						<h2 className="clickableHeading">
							Take a look at our online shop!{" "}
						</h2>
					</a>
					<p className="description">
						On our website we can sell a number of clothes and goods where all
						proceeds will go to our partner charities. Take a look - we add new
						stuff every week!
					</p>
				</div>
				<div className="containerItem">
					<a href="/book-collection" className="pageLink">
						{" "}
						<h2 className="clickableHeading">
							Arrange a donation collection with us!{" "}
						</h2>
					</a>
					<p className="description">
						Have any old clothes or furniture lying around? We can come over to
						pick up any large items and send them to one of our partner
						charities of your choice so they can be sold at their shops.
					</p>
				</div>

				<div className="containerItem">
					<a href="/make-donation" className="pageLink">
						{" "}
						<h2 className="clickableHeading">
							Donate some money for a good cause!
						</h2>
					</a>
					<p className="description">
						You can donate money to a charity of your choice from our website if
						there is a cause that you are passionate about
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
