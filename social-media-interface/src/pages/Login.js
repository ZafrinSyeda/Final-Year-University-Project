/* this is the page that the user sees on entering the site, it is the page for users to log 
into their accounts */

/* react imports */
import React, { useState } from "react";
/* images used */
import logo from "../resources/bigLogo.png";

/* takes in functional components to be able to toggle the login or set an error */
function Login({ Login, error }) {
	/* the details are what the user enters into the login form */
	const [details, setDetails] = useState({ username: "", password: "" });
	/* on submit the user will call the login function to either take the user to 
	the profile page or to display an error */
	const submitHandler = (e) => {
		e.preventDefault();
		Login(details);
	};

	return (
		<form onSubmit={submitHandler} className="login">
			<div className="loginForm">
				<img src={logo} alt="hobbyshare logo" className="loginLogo" />
				{/* the error message would be displayed at the top of the screen */}
				{error !== "" ? <div className="error">{error}</div> : ""}
				<div className="formGroup">
					<label htmlFor="username">Username: </label>
					{/* entering any information in the form will update the details const for 
					its respective list item */}
					<input
						type="text"
						name="username"
						id="username"
						onChange={(e) =>
							setDetails({ ...details, username: e.target.value })
						}
						value={details.username}
					/>
				</div>
				<div className="formGroup">
					<label htmlFor="password">Password: </label>
					<input
						type="password"
						name="password"
						id="password"
						onChange={(e) =>
							setDetails({ ...details, password: e.target.value })
						}
						value={details.password}
					/>
				</div>
				<input type="submit" value="LOGIN" />
			</div>
		</form>
	);
}

export default Login;
