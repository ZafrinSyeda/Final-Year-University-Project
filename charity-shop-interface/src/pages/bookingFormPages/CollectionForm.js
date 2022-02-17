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
	/* Represents the information that will be stored for the form */

	const [step, setStep] = useState(1);

	const [text, setText] = useState(true);

	const [collectionList, setCollectionList] = useState([
		{ item: "", quantity: 0 },
	]);
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
		setStep(step + 1);
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
				case "input":
					newList[index].quantity = e.target.value - 1;
					setShowSnackbar("You have added '" + listItem.item + "'");
					break;
				case "plus":
					console.log(collectionList);
					newList[index].quantity++;
					setShowSnackbar("You have added '" + listItem.item + "'");
					break;
				case "minus":
					newList[index].quantity--;
					setShowSnackbar("You have removed '" + listItem.item + "'");
					break;
				default:
					break;
			}

			if (isNaN(e.target.value)) {
				newList[index].quantity = 1;
			}

			setCollectionList(newList);
			if (newList[index].quantity === 0) {
				handleDeleteItem(listItem.item);
			}
		};

	const handleDeleteItem = (id, setShowSnackbar) => {
		const newList = collectionList.filter((item) => item.item !== id);
		setShowSnackbar("You have removed all '" + id + "'");
		setCollectionList(newList);
		setFormData({
			...formData,
			list: newList,
		});
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
					handleDeleteItem={handleDeleteItem}
					values={formData}
				/>
			);
		case 3:
			return (
				<TimePlace
					nextStep={nextStep}
					prevStep={prevStep}
					values={formData}
					handleChange={handleChange}
				/>
			);

		case 4:
			return (
				<ContactDetails
					nextStep={nextStep}
					prevStep={prevStep}
					values={formData}
					handleChange={handleChange}
					text={text}
					setText={setText}
				/>
			);
		case 5:
			return (
				<Review
					nextStep={nextStep}
					prevStep={prevStep}
					values={formData}
					text={text}
				/>
			);
		case 6:
			return <Success />;
		default:
	}
};

export default CollectionForm;
