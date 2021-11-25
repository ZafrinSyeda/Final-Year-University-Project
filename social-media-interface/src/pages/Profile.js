import React from "react";
import { HobbyPost } from "./HobbyPost";
import hsword from "../resources/horizontal-sword.jpg";
import vsword from "../resources/vertical-sword.jpg";
import crab from "../resources/crab_watercolour.jpg";
import { useState } from "react";
import "./Profile.css";
import logo from "../resources/bigLogo.png";
import Masonry from "@mui/lab/Masonry";

const Profile = () => {
	const [posts, setPosts] = useState([
		{
			id: 1,
			title: "post 1",
			post_img: hsword,
			date: "12 / 03 / 2021",
			description: "desc",
			hobby_id: 1,
		},
		{
			id: 2,
			title: "post 2",
			post_img: vsword,
			date: "14 / 03 / 2021",
			description: "desc",
			hobby_id: 1,
		},
		{
			id: 3,
			title: "post 3",
			post_img: crab,
			date: "12 / 03 / 2021",
			description: "desc",
			hobby_id: 2,
		},
	]);

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

	const [activeButton, setActiveButton] = useState(0);

	function HobbyButtons() {
		return (
			<div>
				{hobbies.map((hobby) => (
					<button
						key={hobby.hobby_id}
						onClick={() => setActiveButton(hobby.hobby_id)}
						className={
							hobby.hobby_id === activeButton
								? "hobbyButton active"
								: "hobbyButton"
						}
					>
						{hobby.name}
					</button>
				))}
				{console.log(activeButton)}
			</div>
		);
	}
	function SideProfile() {
		return (
			<div className="userProfile">
				<div className="sideProfile">
					<img
						src={logo}
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

	function AllPosts() {
		return (
			<div>
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

	function HobbySelect({ hobby }) {
		return (
			<div className="selectedHobby">
				<HobbyPost
					posts={posts.filter((posts) => posts.hobby_id === activeButton)}
				/>
				{console.log(hobby)}
			</div>
		);
	}

	return (
		<div>
			<div className="container">
				<div className="userProfile">
					<SideProfile />
				</div>
				<div className="profile">
					{activeButton !== 0 ? <HobbySelect /> : <AllPosts />}
				</div>
			</div>
		</div>
	);
};

export default Profile;
