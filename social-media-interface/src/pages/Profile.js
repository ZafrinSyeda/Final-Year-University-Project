/* This page represents what the user can view of their own page where they can post about their hobbies */

/* React imports  */
import React, { useState } from "react";
/* reusable components being used */
import { HobbyPost } from "./HobbyPost";
/* images being used on the page */
import hsword from "../resources/horizontal-sword.jpg";
import vsword from "../resources/vertical-sword.jpg";
import crab from "../resources/crab_watercolour.jpg";
import basket from "../resources/mushroom-basket.jpg";
import profilepicture from "../resources/profilepicture.PNG";
/* stylesheet */
import "./Profile.css";

const Profile = () => {
	/* hardcoded the details about the posts on the page */
	const [posts, setPosts] = useState([
		{
			id: 1,
			title: "post 1",
			post_img: basket,
			date: "01 / 04 / 2021",
			description: "desc",
			hobby_id: 3,
		},
		{
			id: 2,
			title: "An Amazing Find!",
			post_img: vsword,
			date: "12 / 03 / 2021",
			description:
				"Rare sword I just about won in a bid, my oponent may have been tough but I was more resilient. Also I may or may not be broke now 😅",
			hobby_id: 1,
		},
		{
			id: 3,
			title: "post 3",
			post_img: crab,
			date: "09 / 03 / 2021",
			description: "desc",
			hobby_id: 2,
		},
		{
			id: 4,
			title: "post 4",
			post_img: hsword,
			date: "28 / 02 / 2021",
			description: "desc",
			hobby_id: 1,
		},
	]);

	/* hardcoded the user's various hobbies */
	const [hobbies, setHobby] = useState([
		{
			hobby_id: 1,
			name: "Antique Sword Collecting",
		},
		{
			hobby_id: 2,
			name: "Watercolouring",
		},
		{ hobby_id: 3, name: "Mushroom Foraging" },
	]);

	/* variable used depending on whether the user has selected one of the hobbies on the side profile
	the value matches the hobby id, but by default it's set to 0 */
	const [activeButton, setActiveButton] = useState(0);

	function UserDetails() {
		return (
			<div>
				<div className="userCard">
					<img
						className="profilePicture"
						src={profilepicture}
						alt="profile picture"
						onClick={() => setActiveButton(0)}
					></img>
					<div className="profileDetail">
						<h3>Makayla Madelynn Kovačić</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
							ligula ex. Phasellus malesuada cursus faucibus. Vivamus sed.
						</p>
					</div>
				</div>
			</div>
		);
	}

	const [selectedValue, setSelectedValue] = useState("");

	const handleChange = (event) => {
		setActiveButton(parseInt(event.target.value));
		setSelectedValue(event.target.value);
	};

	function HobbyMenu() {
		return (
			<div className="hobbyMenu">
				<form className="hobbyDropdown">
					<label for="hobbyOptions">
						<i>Displaying:</i>{" "}
					</label>
					<select
						id="hobbyOptions"
						name="hobbyOptions"
						value={selectedValue}
						onChange={handleChange}
					>
						{" "}
						<option value="0"> All </option>
						{hobbies.map((hobby) => (
							<option
								key={hobby.hobby_id}
								id={hobby.hobby_id}
								value={hobby.hobby_id}
							>
								{hobby.name}
							</option>
						))}
					</select>
				</form>
			</div>
		);
	}

	/* Shows all of the user's posts  */
	function AllPosts() {
		return <HobbyPost posts={posts} />;
	}

	/* the display of a post when just one hobby has been selected from the side profile menu */
	function HobbySelect({ hobby }) {
		return (
			<div className="selectedHobby">
				{/* the post id should match those of the button that has been selected */}
				<HobbyPost
					posts={posts.filter((posts) => posts.hobby_id === activeButton)}
				/>
			</div>
		);
	}

	return (
		<div className="page">
			<UserDetails />
			<HobbyMenu />
			<div className="container">
				{/* displays either all posts or posts of a specific hobby, depending on what
				button has been selected */}

				{activeButton !== 0 ? <HobbySelect /> : <AllPosts />}
			</div>
		</div>
	);
};

export default Profile;
