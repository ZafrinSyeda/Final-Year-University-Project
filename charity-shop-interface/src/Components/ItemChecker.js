import React from "react";
import { useState } from "react";

/**
 * A component used in the health and safety portion of the booking form to allow users to search and
 * filter if an item they wish to donate is on the list of items that charities cannot typically take in
 *
 * props used: 'itemList' which represents the list of items
 */
export const ItemChecker = ({ itemList }) => {
	/* Represents the value that is being written into the search bar */
	const [searchTerm, setSearchTerm] = useState("");
	/* Represents the message that will tell users whether the item that they're searching for
	can be donated or not */
	const [itemWarn, setItemWarn] = useState("");
	/* Used to represent an item that can be donated or not */
	const [isForbidden, setIsForbidden] = useState(false);

	/* counts the number of forbidden items and sets it as the value for the variable itemNum */
	var itemNum = 0;
	for (let i = 0; i < Object.keys(itemList).length; i++) {
		itemNum += Object.keys(itemList[i].items).length;
	}
	/* Used to check whether the user's search term may reflect an item that cannot be donated */
	var includesItem = itemNum;
	return (
		<div>
			<label htmlFor="filter-items">
				Search for an item to see if we cannot take it:
			</label>
			{/* A search bar that allows users to search for whether their items can be donated by seeing
				if it matches an item on the list */}
			<form className="search-filter">
				<input
					type="text"
					id="filter-items"
					placeholder="Check if we can take in an item"
					name="filter"
					onChange={(e) => {
						/* When an item is being searched for it will set the search term to the item
							within the text box */
						setSearchTerm(e.target.value);
						/* If includes item is set to 0, it means that the search term contains no items that 
							are also within the forbidden item list */
						if (includesItem === 0) {
							setItemWarn(
								"it looks like we will most likely be able to take in this item!"
							);
							setIsForbidden(false);
							/* When includes item isn't 0 it means there is at least 1 item in the input 
								text box that matches a forbidden item */
						} else if (includesItem < itemNum) {
							setItemWarn(
								"?????? sorry! we may not be able to take in this item - please check below"
							);
							setIsForbidden(true);
						} else if (itemNum === includesItem) {
							setItemWarn("");
							setIsForbidden(false);
						}
					}}
				/>
			</form>
			{/* The user is presented with a message box that tells them whether their search term matches
				a forbidden item or not depending on the value in the search bar */}
			{isForbidden === true && (
				<div
					className="itemWarnBad"
					aria-errormessage="we may not be able to take in the item you have entered "
				>
					{itemWarn}
				</div>
			)}
			{isForbidden === false && setItemWarn !== "" ? (
				<div className="itemWarnGood">{itemWarn}</div>
			) : null}

			{/* The list of items from the JSON file that is presente in list form on the page */}
			<h1>List of items we cannot take:</h1>
			<div className="threeContainer">
				{itemList.map((val, key) => (
					<div key={key} className="containerLi">
						{/* Presents the type of item that the forbidden item may be */}
						<h2>{val.type} </h2>
						<ul>
							{val.items
								.filter((item) => {
									/* If there is no text in the search bar, all of the items
									should be presented on screen, if the search bar matches one of the 
									items it should present only those items, otherwise includesItem is 
									decremented by 1 to show that one less item could be forbidden*/

									if (searchTerm === "") {
										return item;
									} else if (
										item.toLowerCase().includes(searchTerm.toLowerCase())
									) {
										return item;
									} else {
										includesItem = includesItem - 1;
										return null;
									}
								})
								.map((item, index) => (
									<li key={index}>{item}</li>
								))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
};
