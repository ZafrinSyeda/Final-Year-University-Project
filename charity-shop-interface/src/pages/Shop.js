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
			<h1 className="title" data-testid="shopTitle">
				Shop
			</h1>
			{/* Allows users to shop by the type of product they are looking for by selecting
			one of the div items*/}
			<h1>Shop by Category</h1>
			<div className="threeContainer">
				<div className="containerItem">
					<button className="shopBtn" aria-label="browse clothes">
						<img
							className="container-img-sm"
							src={clothes}
							alt="clothes icon"
						></img>
						<p>Clothes</p>
					</button>
				</div>
				<div className="containerItem">
					<button className="shopBtn" aria-label="browse furniture">
						<img
							className="container-img-sm"
							src={furniture}
							alt="furniture icon"
						></img>
						<p>Furniture</p>
					</button>
				</div>
				<div className="containerItem">
					<button className="shopBtn" aria-label="browse electricals">
						<img
							className="container-img-sm"
							src={electricals}
							alt="electricals icon"
						></img>
						<p>Electricals</p>
					</button>
				</div>
				<div className="containerItem">
					<button className="shopBtn" aria-label="browse books">
						<img className="container-img-sm" src={books} alt="book icon"></img>
						<p>Books</p>
					</button>
				</div>
				<div className="containerItem">
					<button className="shopBtn" aria-label="browse media">
						<img
							className="container-img-sm"
							src={media}
							alt="media icon"
						></img>
						<p>Media</p>
					</button>
				</div>
				<div className="containerItem">
					<button className="shopBtn" aria-label="browse toys">
						<img className="container-img-sm" src={toys} alt="toy icon"></img>
						<p>Toys</p>
					</button>
				</div>
				<div className="containerItem">
					<button className="shopBtn" aria-label="browse other goods">
						<img
							className="container-img-sm"
							src={other}
							alt="other icon"
						></img>
						<p>Other</p>
					</button>
				</div>
			</div>
			{/* Allows users to shop by a specific charity by selecting one of the div items*/}
			<h1>Shop by Charity</h1>
			<div className="threeContainer">
				<div className="containerItem">
					<button
						className="shopBtn"
						aria-label="browse goods where all proceeds go to charity1"
					>
						<img
							className="container-img-sm"
							src={charity1}
							alt="charity1 logo"
						></img>
						<p>Charity 1</p>
					</button>
				</div>
				<div className="containerItem">
					<button
						className="shopBtn"
						aria-label="browse goods where all proceeds go to charity2"
					>
						<img
							className="container-img-sm"
							src={charity2}
							alt="charity2 logo"
						></img>
						<p>Charity 2</p>
					</button>
				</div>
				<div className="containerItem">
					<button
						className="shopBtn"
						aria-label="browse goods where all proceeds go to charity2"
					>
						<img
							className="container-img-sm"
							src={charity3}
							alt="charity3 logo"
						></img>
						<p>Charity 3</p>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Shop;
