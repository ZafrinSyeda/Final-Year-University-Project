// testing the donation form page

import Donate from "../pages/Donate";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";

// testing the validation error messages:
it("should return an error if the user hasn't input anything on the form", () => {
	render(<Donate />);
	fireEvent.submit(screen.getByRole("button", { name: "Donate" }));
	const errorMessage = screen.getByText(/please fill in this form/i);
	expect(errorMessage).toBeInTheDocument();
});

it("should return an error if the user hasn't selected a charity", () => {
	render(<Donate />);
	fireEvent.click(screen.getByLabelText("Single"));
	fireEvent.click(screen.getByLabelText("£5.00"));
	fireEvent.submit(screen.getByRole("button", { name: "Donate" }));
	const errorMessage = screen.getByText(/Please select a charity/i);
	expect(errorMessage).toBeInTheDocument();
});

it("should return an error if the user hasn't selected the frequency of a donation", () => {
	render(<Donate />);
	fireEvent.click(screen.getByLabelText("Charity #1"));
	fireEvent.click(screen.getByLabelText("£5.00"));
	fireEvent.submit(screen.getByRole("button", { name: "Donate" }));
	const errorMessage = screen.getByText(
		/Please select whether this donation will be one-off or monthly/i
	);
	expect(errorMessage).toBeInTheDocument();
});

it("should return an error if the user hasn't selected the amount of money being donated", () => {
	render(<Donate />);
	fireEvent.click(screen.getByLabelText("Charity #1"));
	fireEvent.click(screen.getByLabelText("Single"));
	fireEvent.submit(screen.getByRole("button", { name: "Donate" }));
	const errorMessage = screen.getByText(
		/Please either select an amount or enter an amount you would like to donate/i
	);
	expect(errorMessage).toBeInTheDocument();
});
