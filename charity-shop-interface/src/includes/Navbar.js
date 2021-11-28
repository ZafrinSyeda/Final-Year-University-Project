/* sets up the header of the website */

import React from "react";
import { Menu, NavLink, NavMenu, Logo } from "./navbarComponents";
import banner from "../resources/banner.png";

const Navbar = () => {
	return (
		<>
			<Menu className={"menu"}>
				{/* using NavLinks in order to show what menu button has been selected*/}
				<NavLink to="/">
					<Logo src={banner} alt="website banner"></Logo>
				</NavLink>
				<NavMenu>
					<NavLink to="/about" activeStyle>
						<h3>About Us</h3>
					</NavLink>
					<NavLink to="/shop" activeStyle>
						<h3>Shop</h3>
					</NavLink>
					<NavLink to="/book-collection" activeStyle>
						<h3>Book a Collection</h3>
					</NavLink>
					<NavLink to="/make-donation" activeStyle>
						<h3>Make a Donation</h3>
					</NavLink>
				</NavMenu>
			</Menu>
		</>
	);
};

export default Navbar;
