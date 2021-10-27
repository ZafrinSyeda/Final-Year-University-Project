import React, { Component } from "react";
import ContactDetails from "./ContactDetails";
import HealthSafety from "./HealthSafety";
import ItemSelect from "./ItemSelect";
import TimePlace from "./TimePlace";
import Review from "./Review";
import Success from "./Success";

export default class collectionForm extends Component {
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

	nextStep = () => {
		const { step } = this.state;
		this.setState({ step: step + 1 });
	};

	prevStep = () => {
		const { step } = this.state;
		this.setState({ step: step - 1 });
	};

	changeState = (input) => (e) => {
		this.setState({ [input]: e.target.value });
	};

	render() {
		const { step } = this.state;
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
