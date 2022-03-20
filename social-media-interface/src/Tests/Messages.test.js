import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import Messages from "../pages/Messages";

/**
 * Does a basic test to see if normal input is accepted as a valid message
 */
it("should allow the user to send a normal message", () => {
	render(<Messages />);
	fireEvent.click(screen.getByText("Celestina Benedetti"));
	const messageInput = screen.getByRole("textbox");
	userEvent.type(messageInput, "hello");
	fireEvent.click(screen.getByText("send"));
	fireEvent.click(screen.getByText("Back"));
	const message = screen.getByText("hello");
	expect(message).toBeInTheDocument();
});

/**
 * Tests if blank messages are not accepted as new messages will not show up with the current date next to it
 */
it("should not allow the user to send a message if the send message button is pressed without entering text", () => {
	render(<Messages />);
	fireEvent.click(screen.getByText("Celestina Benedetti"));
	fireEvent.click(screen.getByText("send"));
	fireEvent.click(screen.getByText("Back"));
	const messageDate = screen.getByText("01-25");
	expect(messageDate).toBeInTheDocument();
});

/**
 * Tests if messages with leading whitespaces are not accepted
 */
it("should not allow the user to send a message if the send message button is pressed without entering text", () => {
	render(<Messages />);
	fireEvent.click(screen.getByText("Celestina Benedetti"));
	const messageInput = screen.getByRole("textbox");
	userEvent.type(messageInput, "   ");
	fireEvent.click(screen.getByText("send"));
	fireEvent.click(screen.getByText("Back"));
	const messageDate = screen.getByText("01-25");
	expect(messageDate).toBeInTheDocument();
});
