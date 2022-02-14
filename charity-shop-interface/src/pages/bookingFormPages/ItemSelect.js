/* For the multi-page collection booking form, this page will represent where the user will 
select or enter the items that they would like to be collected */

import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import collectionItems from "../../resources/collection_items.json";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ItemSelect = ({
	nextStep,
	prevStep,
	values,
	handleQuantityChange,
	handleDeleteItem,
	handleMinus,
}) => {
	const [viewList, setViewList] = useState(true);
	const [viewItemList, setViewItemList] = useState("");

	function getIndex(itemName) {
		/* goes through the list to find the item name under the collection list that matches the item name 
		being looked for and returns the index if found*/
		return values.list.findIndex((arr) => arr.item === itemName);
	}

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

	const QuantitySection = (item) => {
		let index = getIndex(item);
		let listItem = { item: item, quantity: 0 };
		if (index != -1) {
			listItem = values.list[index];
		}
		return (
			<div>
				<div>
					<button
						className="quantityBtn"
						disabled={listItem.quantity === 0}
						onClick={() => handleMinus(getIndex(item))}
					>
						-
					</button>
					<input
						className="quantityInput"
						type="numeric"
						name="quantity"
						value={listItem.quantity}
						onChange={handleQuantityChange(getIndex(item), "input", listItem)}
					></input>
					<button
						className="quantityBtn"
						onClick={handleQuantityChange(getIndex(item), "plus", listItem)}
					>
						+
					</button>
				</div>
			</div>
		);
	};

	function FilledList() {
		return (
			<div className="filledList">
				{values.list.slice(1).map((item) => (
					<div className="collectList">
						<div className="collectListItem" key={item.item}>
							{item.item}
							<div className="horizontalAlign">
								{QuantitySection(item.item)}
								<button
									className="deleteBtn"
									onClick={() => handleDeleteItem(item.item)}
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

	function ItemSelectionController() {
		return (
			<div>
				{viewItemList === "" ? <ItemTypeSelection /> : <ItemSelection />}
			</div>
		);
	}

	function ItemTypeSelection() {
		return (
			<div>
				<p className="subtitle">
					Choose the type of item that you would like to select here:
				</p>

				<div className="threeContainer">
					<div className="containerLi">
						<button
							className="itemTypeBtn"
							onClick={() =>
								setViewItemList(
									"Bags/ Boxes of clothes and other smaller items"
								)
							}
						>
							Bags/ Boxes of clothes and other smaller items
						</button>
					</div>
					{collectionItems.map((val, key) => (
						<div key={key} className="containerLi">
							<button
								className="itemTypeBtn"
								onClick={() => setViewItemList(val.type)}
							>
								{val.type}{" "}
							</button>
						</div>
					))}
					;
				</div>
			</div>
		);
	}

	function ItemSelection() {
		if (viewItemList === "Bags/ Boxes of clothes and other smaller items") {
			return (
				<div>
					<div className="selectionHeading">
						<button
							button
							className="backBtn"
							onClick={() => setViewItemList("")}
						>
							<ArrowBackIcon />
						</button>
						<h2>{viewItemList}</h2>
					</div>
					<p className="subtitle">
						For smaller items such as clothes, books, toys, CDs, accessories,
						and other miscalleneous items, we can only collect them if they are
						placed in a labelled box/ bag at your collection point. The label
						must say “Charity Shop Helper Collection”.
					</p>
					<div className="collectList">
						<div className="collectListItem">
							Bags
							{QuantitySection("Bags")}
						</div>
						<div className="collectListItem">
							Boxes
							{QuantitySection("Boxes")}
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<div>
					<div className="selectionHeading">
						<button className="backBtn" onClick={() => setViewItemList("")}>
							<ArrowBackIcon />
						</button>
						<h2>{viewItemList}</h2>
					</div>
					<p className="subtitle">
						⚠ Before adding any item to your list, please ensure it has a fire
						safety label if it originally came with one, and that it is in
						selling condition ⚠{" "}
					</p>
					<div className="collectList">
						{collectionItems
							.filter((listItem) => listItem.type === viewItemList)
							.map((val, key) => (
								<div key={key}>
									{val.items.map((item) => (
										<div>
											<div className="collectListItem">
												{item}
												{QuantitySection(item)}
											</div>
											<hr />
										</div>
									))}
								</div>
							))}
					</div>
				</div>
			);
		}
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
				{viewList ? <ShowList /> : <ItemSelectionController />}
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
