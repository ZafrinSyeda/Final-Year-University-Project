/* used to add a new post to the user's profile */

import React from "react";
import "../Profile.css";
import { BiX } from "react-icons/bi";

export default function NewPost({ Close }) {
	return (
		<div className="popup-outer">
			<div className="upload">
				{/* button used to close the new post pop up modal */}
				<button onClick={Close} className="cancel">
					<BiX size={20} />
				</button>
				<p />
				<h1>Upload Post</h1>
				<p>Why not share something you're proud of!</p>
				<form>
					{/* used to upload the image being used in the post */}
					<button type="button">Upload Image</button>
					<br />
					<label>
						{/* allows users to enter a post title */}
						<h5>Post Title:</h5>
						<input type="text" />
					</label>
					<br />
					<label>
						{/* allows users to enter a post description */}
						<h5>Description:</h5>
						<textarea id="description" rows="4" cols="30" />
					</label>
					<br />
					<label>
						{" "}
						<h5>Select Hobby:</h5>
						<select>
							{/* users can select their hobbies from a drop down list or alternatively 
							they have the option to add a new hobby */}
							<option value="Antique Sword Collecting">
								Antique Sword Collecting
							</option>
							<option value="Watercolouring" defaultValue>
								Watercolouring
							</option>
						</select>
						<button type="button">Add New Hobby</button>
					</label>
				</form>
			</div>
		</div>
	);
}
