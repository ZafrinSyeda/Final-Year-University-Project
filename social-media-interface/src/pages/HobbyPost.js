/* Used to display the user's posts when it's filtered  */
import React from "react";

export const HobbyPost = (props) => {
	/* takes the posts as a prop from where the component is being called */
	const posts = props.posts;
	return (
		<div>
			{/* maps all of the posts taken from the prop */}
			{posts.map((post) => (
				<div className="postPreview" key={post.id}>
					<p className="date">{post.date}</p>
					<div className="hobbyPostContainer">
						<img src={post.post_img} className="postImg" />
						<p>
							<i>{post.title}</i>
						</p>
						<p>{post.description}</p>
					</div>
				</div>
			))}
		</div>
	);
};
