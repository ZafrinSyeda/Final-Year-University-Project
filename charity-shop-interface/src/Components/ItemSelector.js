import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import collectionItems from "../resources/collection_items.json";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const ItemSelector = ({
	items,
	handleQuantityChange,
	handleDeleteItem,
	setShowSnackbar,
}) => {
	const [viewList, setViewList] = useState(true);
	const [viewItemList, setViewItemList] = useState("");

	function getIndex(itemName) {
		/* goes through the list to find the item name under the collection list that matches the item name 
		being looked for and returns the index if found*/
		return items.findIndex((arr) => arr.item === itemName);
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
		const total = items.reduce(
			(totalQuantity, list) => (totalQuantity = totalQuantity + list.quantity),
			0
		);
		return <counter>{total}</counter>;
	}

	const QuantitySection = (item) => {
		let index = getIndex(item);
		let listItem = { item: item, quantity: 0 };
		if (index !== -1) {
			listItem = items[index];
		}
		return (
			<div>
				<div>
					<button
						className="quantityBtn"
						disabled={listItem.quantity === 0}
						onClick={handleQuantityChange(
							getIndex(item),
							"minus",
							listItem,
							setShowSnackbar
						)}
						aria-label="reduce quantity of item"
					>
						-
					</button>
					<input
						className="quantityInput"
						type="numeric"
						name="quantity"
						value={listItem.quantity}
						onChange={handleQuantityChange(
							getIndex(item),
							"input",
							listItem,
							setShowSnackbar
						)}
						aria-label="view and enter the quantity of the item"
					></input>
					<button
						className="quantityBtn"
						onClick={handleQuantityChange(
							getIndex(item),
							"plus",
							listItem,
							setShowSnackbar
						)}
						aria-label="increase quantity of item"
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
				{items.slice(1).map((item) => (
					<div className="collectList">
						<div className="collectListItem" key={item.item}>
							{item.item}
							<div className="horizontalAlign">
								{QuantitySection(item.item)}
								<button
									className="deleteBtn"
									onClick={() => handleDeleteItem(item.item, setShowSnackbar)}
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
				{items.length > 1 ? <FilledList /> : <EmptyList />}
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
		return (
			<div>
				<div className="selectionHeading">
					<button
						button
						className="backBtn"
						onClick={() => setViewItemList("")}
						aria-label="go back to previous view"
					>
						<ArrowBackIcon />
					</button>
					<h2>{viewItemList}</h2>
				</div>
				<p className="subtitle">
					{viewItemList === "Bags/ Boxes of clothes and other smaller items"
						? "For smaller items such as clothes, books, toys, CDs, accessories, and other miscalleneous items, we can only collect them if they are placed in a labelled box/ bag at your collection point. The label must say “Charity Shop Helper Collection”"
						: "⚠ Before adding any item to your list, please ensure it has a fire safety label if it originally came with one, and that it is in selling condition ⚠"}
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

	return (
		<div>
			<div
				className="toggleRadio"
				aria-label="toggle between selecting an item from a list of items and viewing your list of added items "
			>
				<input
					type="radio"
					value="Select Items"
					id="selectItems"
					name="display"
					className="selectRadio"
					onChange={() => setViewList(false)}
					checked={viewList === false}
					aria-label="select items from a list"
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
					aria-label="view your selected items"
				/>{" "}
				<label for="viewList">
					View List <TotalQuantity />
				</label>
			</div>

			<div className="selectList">
				{viewList ? <ShowList /> : <ItemSelectionController />}
			</div>
		</div>
	);
};
