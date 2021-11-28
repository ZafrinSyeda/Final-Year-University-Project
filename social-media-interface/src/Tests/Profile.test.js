// testing the profile page - mainly testing the interactive elements

import Profile from "../pages/Profile";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";

// for now the test will use hardcoded data to check if it's valid
// testing if clicking a button will present the right information
it("should only show the posts of a specific hobby when a button on the user's profile is clicked", () => {
	render(<Profile />);
	const hobbyButton = screen.getByRole("button", {
		name: "Antique Sword Collecting",
	});
	// before the user presses the button, post 3 which is for a different hobby does appear on screen
	const nonexistentText = screen.getByText("post 3");
	fireEvent.click(hobbyButton);
	// after clicking the button it should no longer be present
	expect(nonexistentText).not.toBeInTheDocument();
});

it("should allow the user to go back to the original profile page after selecting a hobby if they click the back button", () => {
	render(<Profile />);
	const hobbyButton = screen.getByRole("button", {
		name: "Antique Sword Collecting",
	});
	fireEvent.click(hobbyButton);
	const backButton = screen.getByTestId("backBtn");
	fireEvent.click(backButton);
	const existentText = screen.getByText("post 3");
	expect(existentText).toBeInTheDocument();
});

it("should allow the user to go back to the original profile page after selecting a hobby if they click the user profile picture", () => {
	render(<Profile />);
	const hobbyButton = screen.getByRole("button", {
		name: "Antique Sword Collecting",
	});
	fireEvent.click(hobbyButton);
	const profilePicture = screen.getByAltText("profile picture");
	fireEvent.click(profilePicture);
	const existentText = screen.getByText("post 3");
	expect(existentText).toBeInTheDocument();
});
