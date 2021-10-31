/* sets up the header of the website */

import React from "react";
import { Menu, NavLink, NavMenu, Logo } from "./navbarComponents";
import charityLogo from "../resources/Charity_Logo.png";

const Navbar = () => {
	return (
		<>
			<Menu className={"menu"}>
				{/* using NavLinks in order to show what menu button has been selected*/}
				<NavLink to="/">
					<Logo src={charityLogo}></Logo>
				</NavLink>
				<NavMenu>
					<NavLink to="/about" activeStyle>
						<h3>About</h3>
					</NavLink>
					<NavLink to="/contact-us" activeStyle>
						<h3>Contact Us</h3>
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