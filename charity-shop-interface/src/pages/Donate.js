/* This page represents the page where users can choose to donate money to one of the partner
charity shops */

import React from "react";
import { useState } from "react";
/* Images being used in the page */
import charity1 from "../resources/charity1.png";
import charity2 from "../resources/charity2.png";
import charity3 from "../resources/charity3.png";

const Donate = () => {
	/* Represents the values that can be selected in the form */
	const [values, setValues] = useState({
		charity: "",
		frequency: "",
		amount: "",
	});

	/* Represents the different error messages that can be presented in the form */
	const [errors, setErrors] = useState({
		all: "",
		charity: "",
		frequency: "",
		amount: "",
	});

	/* If an item in the form is being changed (i.e. selecting a radio button) it will change the value 
	of the form item to the one that has been changed */
	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	/* Sets the different validation messages where necessary, each time there is an error it will scroll 
	to where the item in the form is */
	const validate = () => {
		/* This error is presented when no item of the form has been filled */
		if (!values.charity && !values.frequency && !values.amount) {
			setErrors({ ...errors, all: "Please fill in this form" });
			window.scrollTo({ top: 0, behavior: "smooth" });
			return false;
		}
		/* This error is presented when a charity hasn't been selected */
		if (!values.charity) {
			setErrors({ ...errors, charity: "Please select a charity" });
			window.scrollTo({ top: 100, behavior: "smooth" });
			return false;
		}
		/* This error is presented when the frequency of donations hasn't been selected */
		if (!values.frequency) {
			setErrors({
				...errors,
				frequency:
					"Please select whether this donation will be one-off or monthly",
			});
			window.scrollTo({ top: 500, behavior: "smooth" });
			return false;
		}
		/* This error is presented when the amount hasn't been selected or entered */
		if (!values.amount) {
			setErrors({
				...errors,
				amount:
					"Please either select an amount or enter an amount you would like to donate",
			});
			window.scrollTo({ top: 600, behavior: "smooth" });
			return false;
			/* This error is presented when the user enters an invalid amount to donate (anything that either
				isn't a number, or a float followed by only 2 decimal points, and it can include the £ at the 
				front) */
		} else if (
			!/^(\£?\d{1,3}(?:,?\d{3})*(?:\.\d{2})?|\.\d{2})?$/.test(values.amount)
		) {
			setErrors({ ...errors, amount: "Please enter a valid amount" });
			window.scrollTo({ top: 600, behavior: "smooth" });
			return false;
		}
		return true;
	};

	/* Used to deal with when a user submits the form when they click the submit form button */
	const handleSubmit = (e) => {
		e.preventDefault();
		/* Validates the form and refreshes the page if there are no errors to make it look like a donation
		was submitted*/
		console.log(values.amount);
		const isValid = validate();
		if (isValid) {
			window.location.reload();
		}
	};

	/* The variable is used to signify whether the user has chosen to enter some amount of money
	or will click one of the pre-set values */
	const [showTextbox, setShowTextbox] = React.useState(false);
	/* Used to signify that the user has selected to choose their own amount */
	const enterAmount = () => setShowTextbox(true);
	/* Used to signify that the user has selected to choose a pre-set amount of money */
	const selectDefault = () => setShowTextbox(false);

	return (
		<div className="defaultContainer">
			<h1 className="title">Donate</h1>
			<p>Help out by donating to a charity of your choice</p>
			<form className="donateForm" onSubmit={handleSubmit}>
				{/* Will present the error message if no item has been selected on form submission */}
				{errors.all ? <div className="formError">{errors.all}</div> : null}
				{/* Will present the error message if no charity has been selected on form submission */}
				{errors.charity ? (
					<div className="formError">{errors.charity}</div>
				) : null}
				<p>
					<b>Choose which Charity you will be donating to: </b>
				</p>
				{/* Represents the radio buttons that are used to select a charity of choice */}
				<div className="threeContainer">
					<div className="containerItem">
						<label>
							<input
								type="radio"
								value="Charity #1"
								id="charity1"
								name="charity"
								onChange={handleChange}
							/>
							<img
								className="container-img-sm"
								src={charity1}
								alt="charity1"
							></img>
							<label for="charity1">Charity #1</label>
						</label>
					</div>
					<div className="containerItem">
						<label>
							<input
								type="radio"
								value="Charity #2"
								id="charity2"
								name="charity"
								onChange={handleChange}
							/>
							<img
								className="container-img-sm"
								src={charity2}
								alt="charity2"
							></img>
							<label for="charity2">Charity #2</label>
						</label>
					</div>
					<div className="containerItem">
						<label>
							<input
								type="radio"
								value="Charity #3"
								id="charity3"
								name="charity"
								onChange={handleChange}
							/>
							<img
								className="container-img-sm"
								src={charity3}
								alt="charity3"
							></img>
							<label for="charity3">Charity #3</label>
						</label>
					</div>
				</div>
				<hr />

				{/* Will present the error message if no donation frequency has been selected on 
				form submission */}
				{errors.frequency ? (
					<div className="formError">{errors.frequency}</div>
				) : null}
				<b>How often would you like to donate? </b>
				<div className="threeContainer">
					{/* Represents the radio buttons that are used to select the frequency of donation */}
					<div className="containerItem">
						<label className="donateRadio">
							<input
								type="radio"
								value="Monthly"
								id="monthly"
								name="frequency"
								onChange={handleChange}
							/>{" "}
							<label for="monthly">Monthly</label>
						</label>
					</div>
					<div className="containerItem">
						<label className="donateRadio">
							<input
								type="radio"
								value="Single"
								id="single"
								name="frequency"
								onChange={handleChange}
							/>{" "}
							<label for="single">Single</label>
						</label>
					</div>
				</div>

				{/* Will present the error message if no amount of money has been chosen
				 on form submission */}
				{errors.amount ? (
					<div className="formError">{errors.amount}</div>
				) : null}
				<b>How much would you like to donate? </b>
				{/* Represents the radio buttons that are used to select the donation amount */}
				<div className="threeContainer">
					<div className="containerItem">
						<label className="donateRadio">
							<input
								type="radio"
								value="£5.00"
								id="five"
								name="amount"
								onClick={selectDefault}
								onChange={handleChange}
							/>{" "}
							<label for="five">£5.00</label>
						</label>
					</div>
					<div className="containerItem">
						<label className="donateRadio">
							<input
								type="radio"
								value="£10.00"
								id="ten"
								name="amount"
								onClick={selectDefault}
								onChange={handleChange}
							/>{" "}
							<label for="ten">£10.00</label>
						</label>
					</div>
					<div className="containerItem">
						<label className="donateRadio">
							<input
								type="radio"
								value="£20.00"
								id="twenty"
								name="amount"
								onClick={selectDefault}
								onChange={handleChange}
							/>{" "}
							<label for="twenty">£20.00</label>
						</label>
					</div>
				</div>
				{/* If this radio button is selected, it will present the user with a text box where
				they can enter their own choice of money to donate */}
				<label className="donateRadio">
					{/* if the user clicks on the other button, but doesn't enter anything in the textbox,
					it should reset the amount value to nothing again */}
					<input
						type="radio"
						id="other"
						name="amount"
						value=""
						onClick={enterAmount}
						onChange={handleChange}
					/>
					<label for="other" className="labelTextbox">
						<b>Enter an amount instead: </b>
					</label>
					{showTextbox ? (
						<input
							type="text"
							id="otherAmount"
							name="amount"
							onChange={handleChange}
							data-testid="otherAmount"
						/>
					) : null}
				</label>
				{/* Submits the form */}
				<input type="submit" name="donate" value="Donate"></input>
			</form>
		</div>
	);
};

export default Donate;
