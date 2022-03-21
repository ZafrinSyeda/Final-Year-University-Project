/* For the multi-page collection booking form, this page will represent where the user will 
select or enter the items that they would like to be collected */

import React, { useState } from "react";
import { ItemSelector } from "../../Components/ItemSelector";
import Snackbar from "@mui/material/Snackbar";

const ItemSelect = ({
	values,
	handleQuantityChange,
	handleDeleteItem,
	ProgressBtns,
	ProgressBar,
}) => {
	const [showSnackbar, setShowSnackbar] = useState("");

	const handleCloseSnackbar = (event, reason) => {
		if ("clickaway" === reason) return;
		setShowSnackbar("");
	};

	return (
		<div className="defaultContainer">
			<ProgressBar />
			<h1 className="formTitle">Select Items </h1>
			<p className="subtitle">
				Select the items you will be donating and review your list
			</p>
			<ItemSelector
				items={values.list}
				handleQuantityChange={handleQuantityChange}
				handleDeleteItem={handleDeleteItem}
				setShowSnackbar={setShowSnackbar}
			/>
			{ProgressBtns(false)}
			<Snackbar
				open={showSnackbar !== ""}
				autoHideDuration={6000}
				onClose={handleCloseSnackbar}
				message={showSnackbar}
				action="UNDO "
			/>
		</div>
	);
};

export default ItemSelect;
