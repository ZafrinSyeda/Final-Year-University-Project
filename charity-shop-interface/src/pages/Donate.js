import React from "react";
import charity1 from "../resources/charity1.png";
import charity2 from "../resources/charity2.png";
import charity3 from "../resources/charity3.png";

const Donate = () => {
	return (
		<div className="defaultContainer">
			<h1 className="title">Donate</h1>
			<p>Help out by donating to a charity of your choice</p>
			<form className="donateForm">
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

				<b>How often would you like to donate? </b>
				<div className="threeContainer">
					<div className="containerItem">
						<label className="donateRadio">
							<input type="radio" value="Monthly" id="monthly" name="time" />{" "}
							<label for="monthly">Monthly</label>
						</label>
					</div>

					<div className="containerItem">
						<label className="donateRadio">
							<input type="radio" value="Single" id="single" name="time" />{" "}
							<label for="single">Single</label>
						</label>
					</div>
				</div>
				<b>How much would you like to donate? </b>

				<div className="threeContainer">
					<div className="containerItem">
						<label className="donateRadio">
							<input type="radio" value="£5.00" id="five" name="amount" />{" "}
							<label for="five">£5.00</label>
						</label>
					</div>
					<div className="containerItem">
						<label className="donateRadio">
							<input type="radio" value="£10.00" id="ten" name="amount" />{" "}
							<label for="ten">£10.00</label>
						</label>
					</div>
					<div className="containerItem">
						<label className="donateRadio">
							<input type="radio" value="£20.00" id="twenty" name="amount" />{" "}
							<label for="twenty">£20.00</label>
						</label>
					</div>
				</div>
				<label className="donateRadio">
					<input type="radio" value="Other" id="other" name="amount" />
					<label for="other" className="labelTextbox">
						<b>Enter an amount instead: </b>
					</label>
					<input type="text" name="otherAmount" />
				</label>
				<input type="submit" name="donate" value="Donate"></input>
			</form>
		</div>
	);
};

export default Donate;
