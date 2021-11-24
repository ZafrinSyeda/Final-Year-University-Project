import React from "react";
import { useState } from "react";
import charity1 from "../resources/charity1.png";
import charity2 from "../resources/charity2.png";
import charity3 from "../resources/charity3.png";

const Donate = () => {
	const [values, setValues] = useState({
		charity: "",
		frequency: "",
		amount: "",
	});

	const [errors, setErrors] = useState({
		all: "",
		charity: "",
		frequency: "",
		amount: "",
	});

	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const handleChangeAmount = (e) => {
		setValues({
			...values,
			amount: e.target.value,
		});
	};

	const validate = () => {
		if (!values.charity && !values.frequency && !values.amount) {
			setErrors({ ...errors, all: "Please fill in this form" });
			window.scrollTo({ top: 0, behavior: "smooth" });
			return false;
		}
		if (!values.charity) {
			setErrors({ ...errors, charity: "Please select a charity" });
			window.scrollTo({ top: 100, behavior: "smooth" });
			return false;
		}

		if (!values.frequency) {
			setErrors({
				...errors,
				frequency:
					"Please select whether this donation will be one-off or monthly",
			});
			window.scrollTo({ top: 500, behavior: "smooth" });
			return false;
		}

		if (!values.amount) {
			setErrors({
				...errors,
				amount:
					"Please either select an amount or enter an amount you would like to donate",
			});
			window.scrollTo({ top: 600, behavior: "smooth" });
			return false;
		} else if (
			!/^(\£?\d{1,3}(?:,?\d{3})*(?:\.\d{2})?|\.\d{2})?$/.test(values.amount)
		) {
			setErrors({ ...errors, amount: "Please enter a valid amount" });
			window.scrollTo({ top: 600, behavior: "smooth" });
			return false;
		}
		return true;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const isValid = validate();
		if (isValid) {
			window.location.reload();
		}
	};

	const [showTextbox, setShowTextbox] = React.useState(false);
	const enterAmount = () => setShowTextbox(true);
	const selectDefault = () => setShowTextbox(false);

	return (
		<div className="defaultContainer">
			<h1 className="title">Donate</h1>
			<p>Help out by donating to a charity of your choice</p>
			<form className="donateForm" onSubmit={handleSubmit}>
				{errors.all ? <div className="formError">{errors.all}</div> : null}
				{errors.charity ? (
					<div className="formError">{errors.charity}</div>
				) : null}
				<p>
					<b>Choose which Charity you will be donating to: </b>
				</p>

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
				{errors.frequency ? (
					<div className="formError">{errors.frequency}</div>
				) : null}
				<b>How often would you like to donate? </b>
				<div className="threeContainer">
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
				{errors.amount ? (
					<div className="formError">{errors.amount}</div>
				) : null}
				<b>How much would you like to donate? </b>

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
				<label className="donateRadio">
					<input type="radio" id="other" name="amount" onClick={enterAmount} />
					<label for="other" className="labelTextbox">
						<b>Enter an amount instead: </b>
					</label>
					{showTextbox ? (
						<input type="text" id="otherAmount" onChange={handleChangeAmount} />
					) : null}
				</label>

				<input type="submit" name="donate" value="Donate"></input>
			</form>
		</div>
	);
};

export default Donate;
