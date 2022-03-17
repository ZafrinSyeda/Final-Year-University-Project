/* used to add a new post to the user's profile */

import React from "react";
import "../Profile.css";
import { BiX } from "react-icons/bi";
import hobbies from "../../resources/hobbies.json";

export default function NewPost({ Close }) {
	return (
		<div className="popup-outer">
			<div className="upload">
				{/* button used to close the new post pop up modal */}
				<button onClick={Close} className="cancel" aria-label="cancel new post">
					<BiX size={30} />
				</button>
				<p />
				<h1>Upload Post</h1>
				<p>Why not share something you're proud of!</p>
				<form>
					{/* used to upload the image being used in the post */}
					<button
						type="button"
						className="commentBtn"
						aria-label="upload an image"
					>
						Upload Image
					</button>
					<br />
					<label>
						{/* allows users to enter a post title */}
						<p>
							<b>Post Title:</b>
						</p>
						<input type="text" />
					</label>
					<br />
					<label>
						{/* allows users to enter a post description */}
						<p>
							<b>Description:</b>
						</p>
						<textarea id="description" rows="4" cols="30" />
					</label>
					<br />
					<label>
						{" "}
						<p>
							<b>Select Hobby:</b>
						</p>
						<select>
							{/* users can select their hobbies from a drop down list or alternatively 
							they have the option to add a new hobby */}
							{hobbies.map((hobby) => (
								<option value={hobby} key={hobby.hobby_id}>
									{hobby.name}
								</option>
							))}
						</select>
						<button type="button" className="commentBtn">
							Add New Hobby
						</button>
					</label>
				</form>
			</div>
		</div>
	);
}
