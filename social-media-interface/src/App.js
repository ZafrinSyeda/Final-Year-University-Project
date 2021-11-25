import "./App.css";
import React, { useState } from "react";
import LoginForm from "./pages/Login";
import Profile from "./pages/Profile";
import HeaderMenu from "./pages/components/HeaderMenu";
import EditMenu from "./pages/components/EditMenu";
import NewPost from "./pages/components/NewPost";

function App() {
	const userDetails = {
		username: "UserA",
		password: "password123",
	};

	const [user, setUser] = useState({ username: "" });
	const [error, setError] = useState("");
	const [edit, setEdit] = useState(false);

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
	};

	const EditPage = () => {
		setEdit(!edit);
	};

	const [createPost, setCreatePost] = useState(false);

	const ToggleCreatePost = () => {
		setCreatePost(!createPost);
		console.log(createPost);
	};

	return (
		<div className="App">
			{user.username !== "" ? (
				<div className="profilePage">
					{!edit ? (
						<HeaderMenu
							Logout={Logout}
							EditPage={EditPage}
							NewPost={ToggleCreatePost}
						/>
					) : (
						<EditMenu CloseEdit={EditPage} />
					)}
					{createPost ? <NewPost Close={ToggleCreatePost} /> : null}
					<Profile />
				</div>
			) : (
				<LoginForm Login={Login} error={error} />
			)}
		</div>
	);
}

export default App;
