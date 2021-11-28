/* Used to handle the pages of the multi-page booking collection form */
import React, { Component } from "react";
/* Imports all of the pages involved */
import ContactDetails from "./ContactDetails";
import HealthSafety from "./HealthSafety";
import ItemSelect from "./ItemSelect";
import TimePlace from "./TimePlace";
import Review from "./Review";
import Success from "./Success";

export default class collectionForm extends Component {
	/* Represents the information that will be stored for the form */
	state = {
		step: 1,
		collectionList: [""],
		address: "",
		collectionDate: "",
		collectionTime: "",
		name: "",
		email: "",
		phoneNumber: "",
	};

	/* The function to be used by the 'next' button when moving to the next page in a form */
	nextStep = () => {
		const { step } = this.state;
		this.setState({ step: step + 1 });
	};

	/* The function to be used by the 'previous' button when moving to the previous page in a form */
	prevStep = () => {
		const { step } = this.state;
		this.setState({ step: step - 1 });
	};

	/* Used to change the value of a form item when it's changed within the form */
	changeState = (input) => (e) => {
		this.setState({ [input]: e.target.value });
	};

	render() {
		const { step } = this.state;
		/* The state values that are dependent on the user input within the form */
		const {
			collectionList,
			address,
			collectionDate,
			collectionTime,
			name,
			email,
			phoneNumber,
		} = this.state;
		const values = {
			collectionList,
			address,
			collectionDate,
			collectionTime,
			name,
			email,
			phoneNumber,
		};
		{
			/* Depending on what stage of the form the user is in, they will be presented with a 
		different page of the form */
		}
		switch (step) {
			case 1:
				return (
					<HealthSafety
						nextStep={this.nextStep}
						changeState={this.changeState}
						values={values}
					/>
				);
			case 2:
				return <ItemSelect />;
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
	}
}
