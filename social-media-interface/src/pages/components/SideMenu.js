import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// using icons from the material UI library
import CottageIcon from "@mui/icons-material/Cottage";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ChatIcon from "@material-ui/icons/Chat";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";

/** represents the navigation menu displayed on the side of the screen
 *
 * NewPost: sets whether the new post modal is open or not
 */
const SideMenu = ({ NewPost }) => {
	/* boolean to represnt if the menu is open or closed */
	const [menuOpen, setMenuOpen] = useState(true);
	/* toggles the boolean value if the menu is opened ot closed */
	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};
	/* hamburger mention functionality to open or close the menu */
	function ToggleVisibilityBtn() {
		return (
			<div>
				<button
					onClick={toggleMenu}
					className="hamburger"
					aria-label="show menu"
				>
					<MenuIcon style={{ fontSize: 40 }} />
				</button>
			</div>
		);
	}

	return (
		<div>
			{/* view of the menu when it's hidden */}
			<div className={`menuHidden ${menuOpen ? "" : "hideMenu"}`}>
				<ToggleVisibilityBtn />
			</div>
			{/* view of the menu when it's being displayed */}
			<div className={`sideMenu ${menuOpen ? " showMenu" : ""}`}>
				<div className="menuItems">
					<ToggleVisibilityBtn />
					<ul>
						<li>
							{/* takes the user to view their feed */}
							<NavLink
								className="inactive"
								activeclassname="active"
								exact
								to="/"
							>
								<CottageIcon style={{ fontSize: 40 }} />
								<p>Feed</p>
							</NavLink>
						</li>
						<li>
							{/* takes the user to view their profile */}
							<NavLink
								className="inactive"
								activeclassname="active"
								exact
								to="/Profile"
							>
								<AccountCircleIcon style={{ fontSize: 40 }} />
								<p>Profile</p>
							</NavLink>
						</li>
						<li>
							{/* takes the user to view their messages */}
							<NavLink
								className="inactive"
								activeclassname="active"
								exact
								to="/Messages"
							>
								<ChatIcon style={{ fontSize: 40 }} />
								<p>Messages</p>
							</NavLink>
						</li>
						<li>
							{/* takes the user to view their activity */}
							<NavLink
								className="inactive"
								activeclassname="active"
								exact
								to="/Activity"
							>
								<FavoriteIcon style={{ fontSize: 40 }} />
								<p>Activity</p>
							</NavLink>
						</li>
					</ul>
					{/* opens the new post mobal */}
					<button className="newPostBtn" onClick={NewPost}>
						<AddCircleOutlineIcon style={{ fontSize: 50 }} />
						<p>New Post</p>
					</button>
				</div>
			</div>
		</div>
	);
};

export default SideMenu;
