import React, { useState } from "react";
import { ItemSelector } from "../../Components/ItemSelector";
/* material UI component to represent a snackbar that is displayed */
import Snackbar from "@mui/material/Snackbar";

/* For the multi-page collection booking form, this page will represent where the user will 
select or enter the items that they would like to be collected

props used: 
values: the saved values entered into the form 
handleQuantityChange: deals with changing quantity of an item in the collection list
handleDeleteItem: deals with deleting an item from the collection list
progressBtns: used to move to the next or previous page of the form 
progressBar: shows the user their progress in the form */
const ItemSelect = ({
	values,
	handleQuantityChange,
	handleDeleteItem,
	ProgressBtns,
	ProgressBar,
}) => {
	/* used to set the text to be displayed inside the snackbar */
	const [showSnackbar, setShowSnackbar] = useState("");

	/* used to close the snackbar  */
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
			{/* uses the itemselector component */}
			<ItemSelector
				items={values.list}
				handleQuantityChange={handleQuantityChange}
				handleDeleteItem={handleDeleteItem}
				setShowSnackbar={setShowSnackbar}
			/>
			{ProgressBtns(false)}
			{/* represents the MUI snackbar */}
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
