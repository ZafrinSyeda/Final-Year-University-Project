import "./App.css";
import React, { useState } from "react";
import LoginForm from "./pages/Login";
import Profile from "./pages/Profile";
import HeaderMenu from "./pages/components/HeaderMenu";
import UserProfile from "./pages/components/UserProfile";

function App() {
	const userDetails = {
		username: "UserA",
		password: "password123",
	};

	const [user, setUser] = useState({ username: "" });
	const [error, setError] = useState("");

	const Login = (details) => {
		console.log(details);

		if (
			details.username == userDetails.username &&
			details.password == userDetails.password
		) {
			setUser({
				username: details.username,
			});
		} else {
			setError("Incorrect username or password!");
		}
	};

	const Logout = () => {
		setUser({ username: "" });
		console.log("logging out");
	};

	return (
		<div className="App">
			{user.username !== "" ? (
				<div className="profilePage">
					<HeaderMenu Logout={Logout} />
					<Profile />
				</div>
			) : (
				<LoginForm Login={Login} error={error} />
			)}
		</div>
	);
}

export default App;
