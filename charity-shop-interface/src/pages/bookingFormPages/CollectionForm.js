/* Used to handle the pages of the multi-page booking collection form */
import React, { Component, useState } from "react";
/* Imports all of the pages involved */
import ContactDetails from "./ContactDetails";
import HealthSafety from "./HealthSafety";
import ItemSelect from "./ItemSelect";
import TimePlace from "./TimePlace";
import Review from "./Review";
import Success from "./Success";

const CollectionForm = () => {
	/* Represents the information that will be stored for the form */

	const [step, setStep] = useState(1);

	const [collectionList, setCollectionList] = useState([
		{ id: 1, item: "Exercise Machine", quantity: 1 },
		{ id: 2, item: "Bags", quantity: 2 },
	]);
	const [formData, setFormData] = useState({
		list: collectionList,
		address: "",
		collectionDate: "",
		collectionTime: "",
		name: "",
		email: "",
		phoneNumber: "",
	});

	/* The function to be used by the 'next' button when moving to the next page in a form */
	const nextStep = () => {
		setStep(step + 1);
	};

	/* The function to be used by the 'previous' button when moving to the previous page in a form */
	const prevStep = () => {
		setStep(step - 1);
	};

	/* Used to change the value of a form item when it's changed within the form */
	const handleChange = (input) => (e) => {
		setFormData({ [input]: e.target.value });
	};

	/* Used to change the value of the quantity of an item added to the list when it's changed within the form */
	const handleQuantityChange = (index, type) => (e) => {
		const newList = [...collectionList];
		switch (type) {
			case "input":
				newList[index].quantity = e.target.value;

				break;
			case "plus":
				newList[index].quantity++;

				break;
			case "minus":
				newList[index].quantity--;
				break;
			default:
				break;
		}
		setCollectionList(newList);
	};

	{
		/* Depending on what stage of the form the user is in, they will be presented with a 
		different page of the form */
	}
	switch (step) {
		case 1:
			return <HealthSafety nextStep={nextStep} />;
		case 2:
			return (
				<ItemSelect
					nextStep={nextStep}
					prevStep={prevStep}
					handleChange={handleChange}
					handleQuantityChange={handleQuantityChange}
					values={formData}
				/>
			);
		case 3:
			return <TimePlace />;
		case 4:
			return <ContactDetails />;
		case 5:
			return <Review />;
		case 6:
			return <Success />;
		default:
	}
};

export default CollectionForm;
