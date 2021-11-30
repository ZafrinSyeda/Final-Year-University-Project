// testing the header menu elements

import App from "../App";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { render, screen, fireEvent } from "@testing-library/react";

beforeEach(() => {
	render(<App />);
	const usernameInput = screen.getByLabelText("Username:");
	const passwordInput = screen.getByLabelText("Password:");
	userEvent.type(usernameInput, "UserA");
	userEvent.type(passwordInput, "password123");
	fireEvent.submit(screen.getByText("LOGIN"));
});

// testing the interactivity of buttons to work as expected
it("should show a the upload form pops up on screen when the right button is selected", () => {
	const postButton = screen.getByText("New Post");
	fireEvent.click(postButton);
	expect(screen.getByText("Upload Post")).toBeInTheDocument();
});

it("should bring a user back to the login page when they click the logout button", () => {
	const logout = screen.getByText("Logout");
	fireEvent.click(logout);
	expect(screen.getByText("LOGIN")).toBeInTheDocument();
});
