/* For the multi-page collection booking form, this page will represent the final page where the user
will confirm their form choices and be able to look at their detail in summary to allow them to 
make any necessary pages */

import React from "react";

const Review = ({ nextStep, prevStep }) => {
	return (
		<div>
			<h1>review</h1>
			<div className="horizontalAlign">
				<button className="progressFormBtn" onClick={prevStep}>
					Previous{" "}
				</button>
				<button className="progressFormBtn" onClick={nextStep}>
					Submit{" "}
				</button>
			</div>
		</div>
	);
};

export default Review;
