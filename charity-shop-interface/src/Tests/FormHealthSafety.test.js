// testing the interactive elements of the health and safety page of the collection booking form

import App from "../App";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { render, screen, fireEvent } from "@testing-library/react";

it("should not show an item that doesn't begin with certain letters when the user types in the search bar", () => {
	/* Since rendering booking form pages requires props it may be easier to navigate from the application as a whole
	to the health and safety page*/
	render(<App />);
	fireEvent.click(screen.getByText("Book a Collection"));
	fireEvent.click(screen.getByText("Start your booking"));
	/* the search term will begin with the letters 'kni' so 'inflatable toys' should not be present on the screen
    as it should be filtered out */
	const filteredItem = screen.getByText("Inflatable toys");
	const searchComponent = screen.getByLabelText(/Search for an item/i);
	userEvent.type(searchComponent, "kni");
	expect(filteredItem).not.toBeInTheDocument();
});

it("should show an item that does begin with certain letters when the user types in the search bar", () => {
	render(<App />);
	fireEvent.click(screen.getByText("Book a Collection"));
	fireEvent.click(screen.getByText("Start your booking"));
	// gets a word that does begin with the search term
	const filteredItem = screen.getByText("Knives");
	const searchComponent = screen.getByLabelText(/Search for an item/i);
	userEvent.type(searchComponent, "kni");
	expect(filteredItem).toBeInTheDocument();
});

it("should warn the user if an item that they're searching for may be forbidden", () => {
	render(<App />);
	fireEvent.click(screen.getByText("Book a Collection"));
	fireEvent.click(screen.getByText("Start your booking"));
	const searchComponent = screen.getByLabelText(/Search for an item/i);
	userEvent.type(searchComponent, "kni");
	const warningComponent = screen.getByText(
		/sorry! we may not be able to take in this item/
	);
	expect(warningComponent).toBeInTheDocument();
});

it("should tell the user if an item that they're searching is likely not forbidden", () => {
	render(<App />);
	fireEvent.click(screen.getByText("Book a Collection"));
	fireEvent.click(screen.getByText("Start your booking"));
	const searchComponent = screen.getByLabelText(/Search for an item/i);
	userEvent.type(searchComponent, "hammer");
	const warningComponent = screen.getByText(
		/ we will most likely be able to take in this item/
	);
	expect(warningComponent).toBeInTheDocument();
});
