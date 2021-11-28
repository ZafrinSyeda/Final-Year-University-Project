// testing the login form

import Login from "../pages/Login";
import App from "../App";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { render, screen, fireEvent } from "@testing-library/react";

// test to see if the form is correctly labelled
it("should show a login screen with a way of entering the username and password", () => {
	render(<Login Login="" error="" />);
	const formUsername = screen.getByLabelText("Username:");
	const formPassword = screen.getByLabelText("Password:");
	expect(formUsername).toBeInTheDocument();
	expect(formPassword).toBeInTheDocument();
});

// tests whether submitting the form without entering any text returns an error message or not
it("should return an error message if the user submits the form without entering any text", () => {
	render(<App />);
	fireEvent.submit(screen.getByText("LOGIN"));
	const errorMessage = screen.getByText("Incorrect username or password!");
	expect(errorMessage).toBeInTheDocument();
});

// tests if the user is able to go to the profile page if they log in with the correct details
it("if the user enters the correct username and password, they should be sent to the user's profile", () => {
	render(<App />);
	const usernameInput = screen.getByLabelText("Username:");
	const passwordInput = screen.getByLabelText("Password:");
	userEvent.type(usernameInput, "UserA");
	userEvent.type(passwordInput, "password123");
	fireEvent.submit(screen.getByText("LOGIN"));
	// the word logout can only appear once the user has been able to log in
	expect(screen.getByText("Logout")).toBeInTheDocument();
});

// // tests if the user gets an error message if they log in with the wrong details
it("if the user enters the correct username but wrong password, they should be shown an error message", () => {
	render(<App />);
	const usernameInput = screen.getByLabelText("Username:");
	const passwordInput = screen.getByLabelText("Password:");
	userEvent.type(usernameInput, "UserA");
	userEvent.type(passwordInput, "Password123");
	fireEvent.submit(screen.getByText("LOGIN"));
	const errorMessage = screen.getByText("Incorrect username or password!");
	expect(errorMessage).toBeInTheDocument();
});

it("if the user enters the wrong username but right password, they should be shown an error message", () => {
	render(<App />);
	const usernameInput = screen.getByLabelText("Username:");
	const passwordInput = screen.getByLabelText("Password:");
	userEvent.type(usernameInput, "UserB");
	userEvent.type(passwordInput, "password123");
	fireEvent.submit(screen.getByText("LOGIN"));
	const errorMessage = screen.getByText("Incorrect username or password!");
	expect(errorMessage).toBeInTheDocument();
});
