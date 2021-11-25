import React from "react";
import "../Profile.css";

export default function NewPost({ Close }) {
	return (
		<div className="popup-outer">
			<div className="upload">
				<button onClick={Close} className="cancel">
					Cancel
				</button>
				<h1>Upload Post</h1>
				<p>Share your hard work!</p>
				<form>
					<button type="button">Upload Image</button>
					<br />
					<label>
						<h5>Post Title:</h5>
						<input type="text" />
					</label>
					<br />
					<label>
						<h5>Description:</h5>
						<textarea id="description" rows="4" cols="30" />
					</label>
					<br />
					<label>
						{" "}
						<h5>Select Hobby:</h5>
						<select>
							<option value="Antique Sword Collecting">
								Antique Sword Collecting
							</option>
							<option value="Watercolouring" selected>
								Watercolouring
							</option>
						</select>
					</label>
				</form>
			</div>
		</div>
	);
}
