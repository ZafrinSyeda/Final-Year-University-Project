/* For the multi-page collection booking form, this page will represent where the user will 
select or enter the items that they would like to be collected */

import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const itemSelect = ({
	nextStep,
	prevStep,
	values,
	handleQuantityChange,
	handleDeleteItem,
}) => {
	function EmptyList() {
		return (
			<div className="instructions">
				<p>Nothing added yet!</p>
				<p>
					Click on the “Select Items” or “Add to List” button to select items
					that you wish to be collected
				</p>
			</div>
		);
	}

	function FilledList() {
		return (
			<div className="filledList">
				{values.list.slice(1).map((item, index) => (
					<div className="collectList">
						<div className="collectListItem" key={item.id}>
							{item.item}
							<form></form>
							<div>
								<button
									disabled={item.quantity === 1}
									className="quantityBtn"
									onClick={handleQuantityChange(index, "minus")}
								>
									-
								</button>
								<input
									className="quantityInput"
									type="numeric"
									name="quantity"
									min="1"
									value={item.quantity}
									onChange={handleQuantityChange(index, "input")}
								></input>
								<button
									className="quantityBtn"
									onClick={handleQuantityChange(index, "plus")}
								>
									+
								</button>
								<button
									className="deleteBtn"
									onClick={() => handleDeleteItem(item.id)}
								>
									<DeleteIcon style={{ fontSize: "30px" }} />
								</button>
							</div>
						</div>
						<hr />
					</div>
				))}
			</div>
		);
	}
	return (
		<div className="defaultContainer">
			<h1 className="formTitle">Select Items </h1>
			<p className="subtitle">
				Select the items you will be donating and review your list
			</p>
			<div className="selectList">
				<h1>My List:</h1>
				{values.list.length > 1 ? <FilledList /> : <EmptyList />}
				<button className="cshButton">Add to List</button>
			</div>
			<button className="cshButton" onClick={prevStep}>
				Previous{" "}
			</button>
			<button className="cshButton" onClick={nextStep}>
				Next{" "}
			</button>
		</div>
	);
};

export default itemSelect;
