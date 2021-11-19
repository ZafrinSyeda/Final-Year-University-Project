import React from "react";
import hsword from "../resources/horizontal-sword.jpg";
import vsword from "../resources/vertical-sword.jpg";
import { useState } from "react";
import "./Profile.css";
import Masonry from "react-masonry-css";

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
			post_img: hsword,
			date: "12 / 03 / 2021",
			description: "desc",
			hobby_id: 1,
		},
		{
			id: 4,
			title: "post 4",
			post_img: hsword,
			date: "12 / 03 / 2021",
			description: "desc",
			hobby_id: 1,
		},
		{
			id: 5,
			title: "post 5",
			post_img: vsword,
			date: "14 / 03 / 2021",
			description: "desc",
			hobby_id: 1,
		},
		{
			id: 6,
			title: "post 6",
			post_img: hsword,
			date: "12 / 03 / 2021",
			description: "desc",
			hobby_id: 1,
		},
		{
			id: 7,
			title: "post 7",
			post_img: vsword,
			date: "14 / 03 / 2021",
			description: "desc",
			hobby_id: 1,
		},
	]);

	return (
		<div className="profile">
			<Masonry breakpointCols={2} className="twoCols" columnClassName="col">
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
};

export default Profile;
