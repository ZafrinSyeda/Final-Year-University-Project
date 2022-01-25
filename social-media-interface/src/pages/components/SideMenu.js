import React from "react";
import { Link, NavLink } from "react-router-dom";
// using icons from the material UI library
import CottageIcon from "@mui/icons-material/Cottage";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ChatIcon from "@material-ui/icons/Chat";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const SideMenu = () => {
	return (
		<div className="sideMenu">
			<div className="menuItems">
				<ul>
					<li>
						<NavLink className="inactive" activeClassName="active" exact to="/">
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
			</div>

			<div className="newPostBtn">
				<AddCircleOutlineIcon style={{ fontSize: 50 }} />
				<p>New Post</p>
			</div>
		</div>
	);
};

export default SideMenu;
