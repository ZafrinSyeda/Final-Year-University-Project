import React from "react";

function Profile({ Logout }) {
	return (
		<div>
			<h1> Welcome User</h1>
			<button onClick={Logout}>Logout</button>
		</div>
	);
}

export default Profile;
