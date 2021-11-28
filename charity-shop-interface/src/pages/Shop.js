/* This page acts as a menu to allow users to be able to begin to buy items in order to
support a charity, users can choose to shop by product category or by charity */

import React from "react";
/* These are imports for images used on this page */
import charity1 from "../resources/charity1.png";
import charity2 from "../resources/charity2.png";
import charity3 from "../resources/charity3.png";
import clothes from "../resources/shirt.png";
import toys from "../resources/bear.png";
import books from "../resources/book.png";
import media from "../resources/cd.png";
import furniture from "../resources/chair.png";
import electricals from "../resources/socket.png";
import other from "../resources/delivery_boxes.png";

const Shop = () => {
	return (
		<div className="defaultContainer">
			<h1 className="title">Shop</h1>
			{/* Allows users to shop by the type of product they are looking for by selecting
			one of the div items*/}
			<h1>Shop by Category</h1>
			<div className="threeContainer">
				<div className="containerItem">
					<img className="container-img-sm" src={clothes} alt="clothes"></img>
					<p>Clothes</p>
				</div>
				<div className="containerItem">
					<img
						className="container-img-sm"
						src={furniture}
						alt="furniture"
					></img>
					<p>Furniture</p>
				</div>
				<div className="containerItem">
					<img
						className="container-img-sm"
						src={electricals}
						alt="electrical goods"
					></img>
					<p>Electricals</p>
				</div>
				<div className="containerItem">
					<img className="container-img-sm" src={books} alt="books"></img>
					<p>Books</p>
				</div>
				<div className="containerItem">
					<img className="container-img-sm" src={media} alt="media"></img>
					<p>Media</p>
				</div>
				<div className="containerItem">
					<img className="container-img-sm" src={toys} alt="toys"></img>
					<p>Toys</p>
				</div>
				<div className="containerItem">
					<img className="container-img-sm" src={other} alt="other"></img>
					<p>Other</p>
				</div>
			</div>
			{/* Allows users to shop by a specific charity by selecting one of the div items*/}
			<h1>Shop by Charity</h1>
			<div className="threeContainer">
				<div className="containerItem">
					<img className="container-img-sm" src={charity1} alt="charity1"></img>
					<p>Charity 1</p>
				</div>
				<div className="containerItem">
					<img className="container-img-sm" src={charity2} alt="charity2"></img>
					<p>Charity 2</p>
				</div>
				<div className="containerItem">
					<img className="container-img-sm" src={charity3} alt="charity3"></img>
					<p>Charity 3</p>
				</div>
			</div>
		</div>
	);
};

export default Shop;
