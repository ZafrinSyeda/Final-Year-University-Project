import React from "react";
import forbiddenItems from "../../resources/forbidden_items.json";
import { useState, useEffect } from "react";

function HealthSafety() {
	const [searchTerm, setSearchTerm] = useState("");
	const [itemWarn, setItemWarn] = useState("");
	const [isForbidden, setIsForbidden] = useState(false);
	var itemNum = 0;
	for (let i = 0; i < Object.keys(forbiddenItems).length; i++) {
		itemNum += Object.keys(forbiddenItems[i].items).length;
	}
	var includesItem = itemNum;

	return (
		<div>
			<div className="defaultContainer">
				<h1 className="title">Health and Safety</h1>
				<p>
					As much as we’d love to take in everything you give to use, there is a
					lot of things that we cannot take in due to health and safety reasons,
					these will be listed below, please take some time to check if one of
					the items you want to donate is one that we cannot take. There are
					also some health and safety considerations, such as that fire labels
					must be attached to things such as furniture, and items must be in
					good, sellable condition.
				</p>
				<p>When you are ready to continue, press here:</p>
				<button className="topScrollButton">Continue</button>
			</div>

			<div className="defaultContainer">
				<hr />
				<label htmlFor="filter-items">
					Search for an item to see if we cannot take it:
				</label>
				<form action="/" method="get" className="search-filter">
					<input
						type="text"
						id="filter-items"
						placeholder="Check if we can take in an item"
						name="filter"
						onChange={(event) => {
							setSearchTerm(event.target.value);
							if (includesItem == 0) {
								console.log(includesItem);
								setItemWarn(
									"it looks like we will most likely be able to take in this item!"
								);
								setIsForbidden(false);
							} else if (includesItem < itemNum) {
								console.log(includesItem);
								setItemWarn(
									"sorry! we may not be able to take in this item - please check below"
								);
								setIsForbidden(true);
							}
						}}
					/>
				</form>

				{isForbidden === true && (
					<div className="item-warn-bad">{itemWarn}</div>
				)}
				{isForbidden === false && setItemWarn != "" ? (
					<div className="item-warn-good">{itemWarn}</div>
				) : null}
				<h1>List of items we cannot take:</h1>
				<div className="threeContainer">
					{forbiddenItems.map((val, key) => (
						<div key={key} className="containerLi">
							<h2>{val.type} </h2>
							<ul>
								{val.items
									.filter((item) => {
										if (searchTerm == "") {
											return item;
										} else if (
											item.toLowerCase().includes(searchTerm.toLowerCase())
										) {
											return item;
										} else {
											includesItem -= 1;
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
		</div>
	);
}

export default HealthSafety;
