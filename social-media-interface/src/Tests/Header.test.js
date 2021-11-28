// testing the header menu elements

import App from "../App";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { render, screen, fireEvent } from "@testing-library/react";

const Login = () => {
	const usernameInput = screen.getByLabelText("Username:");
	const passwordInput = screen.getByLabelText("Password:");
	userEvent.type(usernameInput, "UserA");
	userEvent.type(passwordInput, "password123");
	fireEvent.submit(screen.getByText("LOGIN"));
};

// test to see if the form is correctly labelled
it("should show a login screen with a way of entering the username and password", () => {
	render(<App />);
	<Login />;
	expect(screen.getByText("Logout")).toBeInTheDocument();
});
