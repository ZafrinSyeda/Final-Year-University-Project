/* This page represents what the user can view of their own page where they can post about their hobbies */

/* React imports  */
import React, { useState } from "react";
/* reusable components being used */
import { HobbyPost } from "./HobbyPost";
/* images being used on the page */
import hsword from "../resources/horizontal-sword.jpg";
import vsword from "../resources/vertical-sword.jpg";
import crab from "../resources/crab_watercolour.jpg";
import profilepicture from "../resources/profilepicture.PNG";
/* stylesheet */
import "./Profile.css";
/* imports from other libraries aside from React */
import { BiArrowBack } from "react-icons/bi";
import Masonry from "@mui/lab/Masonry";

const Profile = () => {
	/* hardcoded the details about the posts on the page */
	const [posts, setPosts] = useState([
		{
			id: 1,
			title: "An Amazing Find!",
			post_img: hsword,
			date: "14 / 03 / 2021",
			description:
				"Rare sword I just about won in a bid, my oponent may have been tough but I was more resilient. Also I may or may not be broke now 😅",
			hobby_id: 1,
		},
		{
			id: 2,
			title: "post 2",
			post_img: vsword,
			date: "12 / 03 / 2021",
			description: "desc",
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
	]);

	/* variable used depending on whether the user has selected one of the hobbies on the side profile
	the value matches the hobby id, but by default it's set to 0 */
	const [activeButton, setActiveButton] = useState(0);

	/* gets the details from the hobbies const, and maps them to buttons on the side profile */
	function HobbyButtons() {
		return (
			<div>
				{hobbies.map((hobby) => (
					<button
						key={hobby.hobby_id}
						onClick={() => setActiveButton(hobby.hobby_id)}
						className={
							/* used to change the appearance of the button when it's been selected */
							hobby.hobby_id === activeButton
								? "hobbyButton active"
								: "hobbyButton"
						}
					>
						{hobby.name}
					</button>
				))}
			</div>
		);
	}

	/* represents the side profile displayed on the user's profile that details their name, and hobbies*/
	function SideProfile() {
		return (
			<div className="userProfile">
				<div className="sideProfile">
					{activeButton != 0 ? (
						/* when the user has selected a button, a back button should be displayed to make
						it obvious for the user to go back to view all posts */
						<p>
							<button className="back" onClick={() => setActiveButton(0)}>
								<BiArrowBack size={20} data-testid="backBtn" />
							</button>{" "}
						</p>
					) : null}
					{/* added the option to make it so that if the profile picture is clicked the 
					user can go back to viewing all of the posts as well because the back button 
					is a bit small */}
					<img
						className="profilePicture"
						src={profilepicture}
						alt="profile picture"
						onClick={() => setActiveButton(0)}
					></img>
					<h3>Firstname Surname</h3>
					<p>Description</p>
					<HobbyButtons />
				</div>
			</div>
		);
	}

	/* Shows all of the user's posts  */
	function AllPosts() {
		return (
			<div>
				{/* a MUI import that allows for the posts to be displayed in a masonry view */}
				<Masonry columns={{ sm: 1, md: 2 }} spacing={5}>
					{posts.map((post) => (
						<div className="postPreview" key={post.id}>
							<p className="date">{post.date}</p>
							<div className="postContainer">
								<img src={post.post_img} className="postImg" />
								<p>
									<i>{post.title}</i>
								</p>
							</div>
						</div>
					))}
				</Masonry>
			</div>
		);
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
		<div>
			<div className="container">
				{/* displays the side profile */}
				<div className="userProfile">
					<SideProfile />
				</div>
				{/* displays either all posts or posts of a specific hobby, depending on what
				button has been selected */}
				<div className="profile">
					{activeButton !== 0 ? <HobbySelect /> : <AllPosts />}
				</div>
			</div>
		</div>
	);
};

export default Profile;
