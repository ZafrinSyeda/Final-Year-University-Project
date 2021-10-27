import React from "react";
import forbiddenItems from "../../resources/forbidden_items.json";
import { useState } from "react";

function Filter() {
	const [searchTerm, setSearchTerm] = useState("");
}

const healthSafety = ({ searchTerm, setSearchTerm }) => {
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
				<h1>List of items we cannot take:</h1>
				<label htmlFor="filter-items">
					<span className="visually-hidden">
						Search for an item to see if we cannot take it:
					</span>
				</label>
				<form action="/" method="get">
					<input
						type="text"
						id="filter-items"
						placeholder="Check if we can take in an item"
						name="filter"
						onChange={(event) => {
							setSearchTerm(event.target.value);
						}}
					/>
					<button type="submit">Search</button>
				</form>
				{forbiddenItems.map((val, key) => (
					<div key={key}>
						<h2>{val.type} </h2>
						<ul>
							{val.items
								.filter((item) => {
									if ((searchTerm = "")) {
										return item;
									} else if (
										item.toLowerCase().includes(searchTerm.toLowerCase())
									) {
										return item;
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

export default healthSafety;
