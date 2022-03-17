import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
/* Imports for the different pages that should be accessed */
import LoginForm from "./pages/Login";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";
import Activity from "./pages/Activity";
import HeaderMenu from "./pages/components/HeaderMenu";
import NewPost from "./pages/components/NewPost";
import SideMenu from "./pages/components/SideMenu";

function App() {
	/* Hardcoded user details in order to access a page */
	const userDetails = {
		username: "UserA",
		password: "password123",
	};

	/* Used to take the user name to be used when logging in and logging out */
	const [user, setUser] = useState({ username: "" });
	/* Used to set the validation error if the username or password is incorrect */
	const [error, setError] = useState("");
	/* Variable that is set when the user wants to add a new post to their profile */
	const [createPost, setCreatePost] = useState(false);

	/* Used when the user is logging in, takes details from the login form */
	const Login = (details) => {
		console.log(details);

		if (
			details.username === userDetails.username &&
			details.password === userDetails.password
		) {
			/* if the username and password matches the hardcoded versions, the user can login in */
			setUser({
				username: details.username,
			});
			/* if there is any error it is made back to nothing so when the user logs out the 
			error message won't still be displayed */
			setError("");
		} else {
			/* if there is some type of error, an error message will be displayed instead */
			setError("Incorrect username or password!");
		}
	};

	/* when the user logs out their user changes, and they will be set back to the login screen */
	const Logout = () => {
		setUser({ username: "" });
	};

	/* toggled to be true or false depending on whether the user wants to add a new post or not */
	const toggleCreatePost = () => {
		setCreatePost(!createPost);
	};

	return (
		<div className="App">
			{/* when the user logs in correctly, the username is set to the username, so when it's not blank 
			the user profile should be displayed, otherwise a login page is shown */}
			{user.username !== "" ? (
				<div className="pageTemplate">
					<Router>
						<SideMenu NewPost={toggleCreatePost} />
						<Routes>
							<Route path="/" element={<Feed />} />
							<Route path="/Profile" element={<Profile />} />
							<Route path="/Messages" element={<Messages />} />
							<Route path="/Activity" element={<Activity />} />
						</Routes>
					</Router>
					<HeaderMenu Logout={Logout} />
					{/* if the user wants to add a new post the NewPost page will be overlayed on the screen */}
					{createPost ? <NewPost Close={toggleCreatePost} /> : null}
				</div>
			) : (
				<LoginForm Login={Login} error={error} />
			)}
		</div>
	);
}

export default App;
