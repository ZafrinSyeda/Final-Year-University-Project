// testing that the hobbyposts file renders the props correctly

import { HobbyPost } from "../pages/HobbyPost";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

const mockdata = [
	{
		id: 100,
		title: "not real!!",
		post_img: null,
		date: "29/02/1876",
		description: "luke i am not your father",
		hobby_id: 5,
	},
];

it("should display the date based on the information given", () => {
	render(<HobbyPost posts={mockdata} />);
	const date = screen.getByText("29/02/1876");
	expect(date).toBeInTheDocument();
});

it("should display the title based on the information given", () => {
	render(<HobbyPost posts={mockdata} />);
	const title = screen.getByText("not real!!");
	expect(title).toBeInTheDocument();
});

it("should display the description based on the information given", () => {
	render(<HobbyPost posts={mockdata} />);
	const desc = screen.getByText("luke i am not your father");
	expect(desc).toBeInTheDocument();
});
