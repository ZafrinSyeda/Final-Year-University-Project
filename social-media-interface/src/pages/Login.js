import React, { useState } from "react";
import logo from "../resources/bigLogo.png";

function Login({ Login, error }) {
	const [details, setDetails] = useState({ username: "", password: "" });
	const submitHandler = (e) => {
		e.preventDefault();
		Login(details);
	};
	return (
		<form onSubmit={submitHandler} className="login">
			<div className="login-form">
				<img src={logo} alt="hobbyshare logo" className="login-logo" />
				{error != "" ? <div className="error">{error}</div> : ""}
				<div className="form-group">
					<label htmlFor="username">Username: </label>
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
				<div className="form-group">
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
