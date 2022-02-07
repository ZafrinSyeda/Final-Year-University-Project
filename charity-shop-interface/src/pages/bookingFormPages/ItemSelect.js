/* For the multi-page collection booking form, this page will represent where the user will 
select or enter the items that they would like to be collected */

import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import collectionItems from "../../resources/collection_items.json";

const ItemSelect = ({
	nextStep,
	prevStep,
	values,
	handleQuantityChange,
	handleDeleteItem,
}) => {
	const [viewList, setViewList] = useState(true);

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

	function TotalQuantity() {
		const total = values.list.reduce(
			(totalQuantity, list) => (totalQuantity = totalQuantity + list.quantity),
			0
		);
		return <counter>{total}</counter>;
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

	function ShowList() {
		return (
			<div>
				<h1>My List:</h1>
				{values.list.length > 1 ? <FilledList /> : <EmptyList />}
				<button className="cshButton" onClick={() => setViewList(false)}>
					Add to List
				</button>
			</div>
		);
	}

	function ItemTypeSelection() {
		return (
			<div className="threeContainer">
				<div className="containerLi">
					<button className="itemTypeBtn">
						Bags/ Boxes of clothes and other smaller items
					</button>
				</div>
				{collectionItems.map((val, key) => (
					<div key={key} className="containerLi">
						{/* Presents the type of item that the forbidden item may be */}
						<button className="itemTypeBtn">{val.type} </button>
					</div>
				))}
				;
			</div>
		);
	}
	return (
		<div className="defaultContainer">
			<h1 className="formTitle">Select Items </h1>
			<p className="subtitle">
				Select the items you will be donating and review your list
			</p>
			<div className="toggleRadio">
				<input
					type="radio"
					value="Select Items"
					id="selectItems"
					name="display"
					className="selectRadio"
					onChange={() => setViewList(false)}
					checked={viewList === false}
				/>{" "}
				<label for="selectItems">Select Items</label>
				<input
					type="radio"
					value="View List"
					id="viewList"
					name="display"
					className="selectRadio"
					onChange={() => setViewList(true)}
					checked={viewList === true}
				/>{" "}
				<label for="viewList">
					View List <TotalQuantity />
				</label>
			</div>
			<div className="selectList">
				{viewList ? <ShowList /> : <ItemTypeSelection />}
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

export default ItemSelect;
