// testing the navigation menu

import App from "../App";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";

// testing that the buttons on the menu sends users to the right page
// testing the about us menu button
it("should present the about us page when the user selects the about us button", () => {
	render(<App />);
	const menuButton = screen.getByText("About Us");
	fireEvent.click(menuButton);
	const heading = screen.getByTestId("aboutTitle");
	expect(heading).toBeInTheDocument();
});

// testing the shop button
it("should present the shop page when the user selects the shop button", () => {
	render(<App />);
	const menuButton = screen.getByText("Shop");
	fireEvent.click(menuButton);
	const heading = screen.getByTestId("shopTitle");
	expect(heading).toBeInTheDocument();
});

// testing the Book a Collection button
it("should present the booking collection starting page when the user selects the book a collection button", () => {
	render(<App />);
	const menuButton = screen.getByText("Book a Collection");
	fireEvent.click(menuButton);
	const heading = screen.getByTestId("bookingTitle");
	expect(heading).toBeInTheDocument();
});

// testing the Donate button
it("should present the donation page when the user selects the donate button", () => {
	render(<App />);
	const menuButton = screen.getByText("Make a Donation");
	fireEvent.click(menuButton);
	// just taking the heading is fine as the heading on the donate page doesn't match the navigation heading
	const heading = screen.getByRole("heading", { name: "Donate" });
	expect(heading).toBeInTheDocument();
});

// testing the home button
it("should present the home page when the user selects the home button", () => {
	render(<App />);
	const menuButton = screen.getByAltText("website banner");
	fireEvent.click(menuButton);
	const homePage = screen.getByTestId("homePage");
	expect(homePage).toBeInTheDocument();
});
