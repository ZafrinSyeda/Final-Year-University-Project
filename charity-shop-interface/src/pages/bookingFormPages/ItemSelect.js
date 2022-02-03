/* For the multi-page collection booking form, this page will represent where the user will 
select or enter the items that they would like to be collected */

import React from "react";

const itemSelect = ({ values, handleQuantityChange }) => {
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
			<div>
				{values.list.map((item, index) => (
					<div className="collectList">
						<div className="collectListItem" key={item.id}>
							{item.item}
							<form></form>
							<div>
								<button
									className="quantityBtn"
									onClick={handleQuantityChange(index, "minus")}
								>
									-
								</button>
								<input
									className="quantityInput"
									type="number"
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
				{values.list.length > 0 ? <FilledList /> : <EmptyList />}
			</div>
		</div>
	);
};

export default itemSelect;
