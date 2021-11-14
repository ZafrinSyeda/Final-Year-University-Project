import React from "react";
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
			<h1>Shop by Category</h1>
			<div className="threeContainer">
				<div className="containerItem">
					<img
						className="container-img-sm"
						src={clothes}
						alt="clothes image"
					></img>
					<p>Clothes</p>
				</div>
				<div className="containerItem">
					<img
						className="container-img-sm"
						src={furniture}
						alt="furniture image"
					></img>
					<p>Furniture</p>
				</div>
				<div className="containerItem">
					<img
						className="container-img-sm"
						src={electricals}
						alt="electricals image"
					></img>
					<p>Electricals</p>
				</div>
				<div className="containerItem">
					<img className="container-img-sm" src={books} alt="book image"></img>
					<p>Books</p>
				</div>
				<div className="containerItem">
					<img className="container-img-sm" src={media} alt="media image"></img>
					<p>Media</p>
				</div>
				<div className="containerItem">
					<img className="container-img-sm" src={toys} alt="toys image "></img>
					<p>Toys</p>
				</div>
				<div className="containerItem">
					<img
						className="container-img-sm"
						src={other}
						alt="other image "
					></img>
					<p>Other</p>
				</div>
			</div>
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
