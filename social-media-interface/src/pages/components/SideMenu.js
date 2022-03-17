import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// using icons from the material UI library
import CottageIcon from "@mui/icons-material/Cottage";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ChatIcon from "@material-ui/icons/Chat";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";

const SideMenu = ({ NewPost }) => {
	const [menuOpen, setMenuOpen] = useState(true);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

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
			<div className={`menuHidden ${menuOpen ? "" : "hideMenu"}`}>
				<ToggleVisibilityBtn />
			</div>
			<div className={`sideMenu ${menuOpen ? " showMenu" : ""}`}>
				<div className="menuItems">
					<ToggleVisibilityBtn />
					<ul>
						<li>
							<NavLink
								className="inactive"
								activeClassName="active"
								exact
								to="/"
							>
								<CottageIcon style={{ fontSize: 40 }} />
								<p>Feed</p>
							</NavLink>
						</li>
						<li>
							<NavLink
								className="inactive"
								activeClassName="active"
								exact
								to="/Profile"
							>
								<AccountCircleIcon style={{ fontSize: 40 }} />
								<p>Profile</p>
							</NavLink>
						</li>
						<li>
							<NavLink
								className="inactive"
								activeClassName="active"
								exact
								to="/Messages"
							>
								<ChatIcon style={{ fontSize: 40 }} />
								<p>Messages</p>
							</NavLink>
						</li>
						<li>
							<NavLink
								className="inactive"
								activeClassName="active"
								exact
								to="/Activity"
							>
								<FavoriteIcon style={{ fontSize: 40 }} />
								<p>Activity</p>
							</NavLink>
						</li>
					</ul>
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
