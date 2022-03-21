import React, { useState } from "react";
/* material UI icons used  */
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
/* list of items the user can add to their list */
import collectionItems from "../resources/collection_items.json";

/**
 * A component used by the item select page of the booking form that allows the user to
 * toggle between adding items from a list of items to a list of items they wish to donate, and
 * a view of the list of items they wish to donate
 *
 * props used:
 * items: represents the list of items that can be added to their list
 * handleQuantityChange: used to manage the user's list if the number of a particular item is changed
 * handleDeleteItem: used to manage the user's list if the number of a particular item is deleted
 * setShowSnackbar: if an item's status changes, a snackbar is displayed on the screen to show the user
 */
export const ItemSelector = ({
	items,
	handleQuantityChange,
	handleDeleteItem,
	setShowSnackbar,
}) => {
	/* Boolean value used to toggle between showing the user's their list or the list of items to donate */
	const [viewList, setViewList] = useState(true);
	/* Used to set the type of item the user wishes to donate */
	const [itemType, setItemType] = useState("");

	/* goes through the list to find the item name under the collection list that matches the item name 
		being looked for and returns the index if found*/
	function getIndex(itemName) {
		return items.findIndex((arr) => arr.item === itemName);
	}

	/* Displays user's list when there are no items in their list of items to donate */
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

	/* Shows the user the total number of items in their list */
	function TotalQuantity() {
		/* .reduce allows for summing up all the array items under quantity, with 0 as the initial value  */
		const total = items.reduce(
			(totalQuantity, list) => (totalQuantity = totalQuantity + list.quantity),
			0
		);
		return <b className="counter">{total}</b>;
	}

	/* Used to represent a quantity field component that is used within the item selector */
	const QuantityField = (item) => {
		/* checks to see if the item exists within the user's list already or if it's a new item */
		let index = getIndex(item);
		/* creates an array index for items that are not yet in the user's list to be presented with a
		quantity of 0  */
		let listItem = { item: item, quantity: 0 };
		/* if the item is on the list, it makes use of the array entry for the list item  */
		if (index !== -1) {
			listItem = items[index];
		}
		return (
			<div>
				<div>
					<button
						/* Used to decrement the quantity unless the quantity is 0 or less */
						className="quantityBtn"
						disabled={listItem.quantity <= 0}
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
						/* Used to manually change the quantity with input */
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
						/* Used to increase the quantity */
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

	/* Shows the user's list once it has at least one item and allows users to adjust the quantity
	or delete items from the list */
	function FilledList() {
		return (
			<div className="filledList">
				{/* /* goes through all the items in the list besides the first one 
				which exists to set the layout of a list item */}
				{items.slice(1).map((item) => (
					<div className="collectList">
						<div className="collectListItem" key={item.item}>
							{item.item}
							<div className="horizontalAlign">
								{QuantityField(item.item)}
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

	/* Controls what is displayed when the user selects the option to view their list */
	function ShowList() {
		/* if the user previously selected to view a specific item type it will reset that */
		setItemType("");
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

	/* Controls what is displayed when the user wants to select an item to add to their list */
	function ItemSelectionController() {
		return (
			<div>{itemType === "" ? <ItemTypeSelection /> : <ItemSelection />}</div>
		);
	}

	/* Presents users with a list of categories for items to donate */
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
								onClick={() => setItemType(val.type)}
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

	/* Presents users with a list of items they can add to their list to donate */
	function ItemSelection() {
		return (
			<div>
				<div className="selectionHeading">
					<button
						button
						className="backBtn"
						onClick={() => setItemType("")}
						aria-label="go back to select category view"
					>
						<ArrowBackIcon />
					</button>
					<h2>{itemType}</h2>
				</div>
				{/* subtitle differs based on the type of item being selected */}
				<p className="subtitle">
					{itemType === "Bags/ Boxes of clothes and other smaller items"
						? "For smaller items such as clothes, books, toys, CDs, accessories, and other miscalleneous items, we can only collect them if they are placed in a labelled box/ bag at your collection point. The label must say “Charity Shop Helper Collection”"
						: "⚠ Before adding any item to your list, please ensure it has a fire safety label if it originally came with one, and that it is in selling condition ⚠"}
				</p>
				<div className="collectList">
					{collectionItems
						.filter((listItem) => listItem.type === itemType)
						.map((val, key) => (
							<div key={key}>
								{val.items.map((item) => (
									<div>
										<div className="collectListItem">
											{item}
											{QuantityField(item)}
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
			{/* allows users to toggle between selecting an item to donate and viewing list */}
			<div
				className="toggleRadio"
				aria-label="toggle between selecting an item from a list of items you can donate, and viewing your list of added items "
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
				<label htmlFor="selectItems">Select Items</label>
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
				<label htmlFor="viewList">
					View List <TotalQuantity />
				</label>
			</div>

			<div className="selectList">
				{viewList ? <ShowList /> : <ItemSelectionController />}
			</div>
		</div>
	);
};
