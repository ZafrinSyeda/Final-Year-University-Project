/* Used to handle the pages of the multi-page booking collection form */
import React, { useState } from "react";
/* Imports all of the pages involved */
import ContactDetails from "./ContactDetails";
import HealthSafety from "./HealthSafety";
import ItemSelect from "./ItemSelect";
import TimePlace from "./TimePlace";
import Review from "./Review";
import Success from "./Success";

const CollectionForm = () => {
	/* represents the current step in the form the user is on */
	const [step, setStep] = useState(1);
	/* represents the furthest step that the user has reached */
	const [maxStep, setMaxStep] = useState(1);
	/* represents the stages of the form that the user has completed */
	const [complete, setComplete] = useState([false, false, false, false, false]);
	/* represents the names of each step */
	const stepNames = [
		"Health and Safety",
		"Select Items",
		"Collection Address and Time",
		"Contact Details",
		"Review",
	];

	/* represents whether the user prefers to be contacted by text or email */
	const [text, setText] = useState(true);

	/* represents the list of items the user wishes to donate */
	const [collectionList, setCollectionList] = useState([
		{ item: "", quantity: 0 },
	]);
	/* Represents the information that will be stored for the form */
	const [formData, setFormData] = useState({
		list: collectionList,
		addressLine1: "",
		addressLine2: "",
		townCity: "",
		postcode: "",
		collectionDate: "",
		collectionTime: "",
		title: "",
		forename: "",
		surname: "",
		email: "",
		phoneNumber: "",
	});

	/* The function to be used by the 'next' button when moving to the next page in a form */
	const nextStep = () => {
		/* updates the completed steps array to set the step the user is moving from as true */
		let newComplete = [...complete];
		newComplete[step - 1] = true;
		setComplete(newComplete);
		setStep(step + 1);
		if (step >= maxStep) setMaxStep(step);
	};

	/* The function to be used by the 'previous' button when moving to the previous page in a form */
	const prevStep = () => {
		setStep(step - 1);
	};

	/* Used to change the value of a form item when it's changed within the form */
	const handleChange = (input) => (e) => {
		setFormData({ ...formData, [input]: e.target.value });
	};

	/* Used to change the value of the quantity of an item added to the list when it's changed within the form */
	const handleQuantityChange =
		(index, type, listItem, setShowSnackbar) => (e) => {
			let newList = [];
			/* used to add a new item to the collection list */
			if (index === -1) {
				newList = [...collectionList, listItem];
				index = newList.length - 1;
				setFormData({
					...formData,
					list: newList,
				});
			} else {
				newList = [...collectionList];
			}

			switch (type) {
				/* updates the quantity to input value */
				case "input":
					newList[index].quantity = e.target.value - 1;
					setShowSnackbar("You have added '" + listItem.item + "'");
					break;
				/* increases the quantity of the item */
				case "plus":
					newList[index].quantity++;
					setShowSnackbar("You have added '" + listItem.item + "'");
					break;
				/* decreases the quantity of the item */
				case "minus":
					newList[index].quantity--;
					setShowSnackbar("You have removed '" + listItem.item + "'");
					break;
				default:
					break;
			}
			/* if the input value is an invalid character the quantity defaults to 1 */
			if (isNaN(e.target.value)) {
				newList[index].quantity = 1;
			}
			/* updates the list */
			setCollectionList(newList);
			/* if the item quantity was set to 0, it should be treated in the same way an item is when it's deleted */
			if (newList[index].quantity === 0) {
				handleDeleteItem(listItem.item, setShowSnackbar);
			}
		};

	/* removes the item from the list and updates the list to enact these changes  */
	const handleDeleteItem = (id, setShowSnackbar) => {
		const newList = collectionList.filter((item) => item.item !== id);
		setShowSnackbar("You have removed all '" + id + "'");
		setCollectionList(newList);
		setFormData({
			...formData,
			list: newList,
		});
	};

	/* represents the buttons to progress along the form */
	const ProgressBtns = (isReview) => {
		return (
			<div className="horizontalAlign">
				{/* button used to go to the previous page */}
				<button className="progressFormBtn" onClick={prevStep}>
					Previous{" "}
				</button>
				{/* button used to go to the next page which will say 'submit' if it's the last form page */}
				{isReview ? (
					<button className="submitFormBtn" onClick={nextStep}>
						SUBMIT{" "}
					</button>
				) : (
					<button className="progressFormBtn" onClick={nextStep}>
						Next{" "}
					</button>
				)}
			</div>
		);
	};

	/* represents the progress bar that's displayed at the top of each page of the collection booking form */
	const ProgressBar = () => {
		return (
			<div>
				{stepNames.map((stepName, index) => (
					<div className="progressBar">
						{/* the presentation of the progress bar item depends on whether the user is on
						the current step, they have completed a step, or for a step they have yet to reach */}
						<div
							className={
								step - 1 === index
									? "currentStep"
									: complete[index]
									? "completeStep"
									: "incompleteStep"
							}
						>
							{step - 1 === index
								? ""
								: complete[index]
								? "✔"
								: index === maxStep
								? "..."
								: ""}
						</div>
						{/* allows the user to go back to any step from the progress bar */}
						<button
							className="progressLink"
							onClick={() => setStep(index + 1)}
							disabled={maxStep < index}
						>
							{stepName}
						</button>
					</div>
				))}
			</div>
		);
	};

	/* Depending on what stage of the form the user is in, they will be presented with a 
		different page of the form */

	switch (step) {
		case 1:
			return <HealthSafety nextStep={nextStep} ProgressBar={ProgressBar} />;
		case 2:
			return (
				<ItemSelect
					ProgressBar={ProgressBar}
					handleChange={handleChange}
					handleQuantityChange={handleQuantityChange}
					handleDeleteItem={handleDeleteItem}
					values={formData}
					ProgressBtns={ProgressBtns}
				/>
			);
		case 3:
			return (
				<TimePlace
					ProgressBar={ProgressBar}
					values={formData}
					handleChange={handleChange}
					ProgressBtns={ProgressBtns}
				/>
			);

		case 4:
			return (
				<ContactDetails
					ProgressBar={ProgressBar}
					values={formData}
					handleChange={handleChange}
					text={text}
					setText={setText}
					ProgressBtns={ProgressBtns}
				/>
			);
		case 5:
			return (
				<Review
					ProgressBar={ProgressBar}
					values={formData}
					text={text}
					ProgressBtns={ProgressBtns}
				/>
			);
		case 6:
			return <Success />;
		default:
	}
};

export default CollectionForm;
