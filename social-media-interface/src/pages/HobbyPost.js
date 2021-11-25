import React from "react";

export const HobbyPost = (props) => {
	const posts = props.posts;
	return (
		<div>
			{posts.map((post) => (
				<div className="postPreview" key={post.id}>
					<p className="date">{post.date}</p>
					<div className="hobbyPostContainer">
						<img src={post.post_img} className="postImg" />
						<p>
							<i>{post.title}</i>
						</p>
						<description>{post.description}</description>
					</div>
				</div>
			))}
		</div>
	);
};
