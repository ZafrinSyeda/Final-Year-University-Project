/* Used to display the user's posts when it's filtered  */
import React from "react";
import Masonry from "@mui/lab/Masonry";

export const HobbyPost = (props) => {
	/* takes the posts as a prop from where the component is being called */
	const posts = props.posts;
	return (
		<div>
			{/* a MUI import that allows for the posts to be displayed in a masonry view */}
			<Masonry columns={{ sm: 1, md: 2 }} spacing={5}>
				{posts.map((post) => (
					<div className="postPreview" key={post.id} tabIndex="0">
						<img
							src={post.post_img}
							className="postImg"
							alt={post.description}
						/>
						<div className="titleOverlay">
							<p>{post.title}</p>
						</div>
					</div>
				))}
			</Masonry>
		</div>
	);
};
