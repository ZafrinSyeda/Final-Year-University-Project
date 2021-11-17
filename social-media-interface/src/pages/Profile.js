import React from "react";
import ReactDOM from "react-dom";
import logo from "../resources/bigLogo.png";

const posts = [
	{
		id: 1,
		title: "post 1",
		img: logo,
		date: "12 / 03 / 2021",
		description: "desc",
	},
];

const Profile = () => {
	return <div className="profile">hello world </div>;
};

export default Profile;
