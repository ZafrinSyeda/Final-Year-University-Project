import React from "react";

/* For the multi-page collection booking form, this page will represent the final page where the user
will confirm their form choices and be able to look at their detail in summary to allow them to 
make any necessary pages */
const Review = ({ values, text, ProgressBtns, ProgressBar }) => {
	return (
		<div className="defaultContainer">
			<ProgressBar />
			<h1 className="formTitle"> Review</h1>
			<p className="subtitle">
				Review You're nearly done! Now all that's left to do is confirm the
				information
			</p>
			<div className="reviewList">
				{/* shows the user each item that the user has added to their collection list */}
				<h2>Items to be Collected: </h2>
				<ul className="reviewItem">
					{values.list.slice(1).map((item) => (
						<li key={item.item}>
							{item.item} (Quantity: {item.quantity})
						</li>
					))}
				</ul>
				{/* shows the users address details  */}
				<h2>Address: </h2>
				<div className="reviewItem">
					<p>{values.addressLine1}, </p>
					<p>{values.addressLine2},</p>
					<p>{values.townCity},</p>
					<p>{values.postcode},</p>
				</div>
				{/* shows the user the chosen time to collect the donation */}
				<h2>Time: </h2>
				<div className="reviewItem">
					<p>
						{values.collectionDate}: {values.collectionTime}
					</p>
				</div>
				{/* shows the user's contact details  */}
				<h2>Contact Details: </h2>
				<div className="reviewItem">
					<p>
						{values.title} {values.forename} {values.surname}
					</p>
					{/* either shows text or email depending on the user's choice */}
					{text ? (
						<p>
							<i>Phone Number: &nbsp;</i> {values.phoneNumber}
						</p>
					) : (
						<p>
							<i>Email: &nbsp;</i>
							{values.email}
						</p>
					)}
				</div>
			</div>
			{ProgressBtns(true)}
		</div>
	);
};

export default Review;
