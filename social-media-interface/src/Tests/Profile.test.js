// testing the profile page - mainly testing the interactive elements

import Profile from "../pages/Profile";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";

// for now the test will use hardcoded data to check if it's valid
// testing if clicking a button will present the right information
it("should only show the posts of a specific hobby when a specific select option is clicked", () => {
	render(<Profile />);
	/*the user should not see any post with the alt text which is the image description of a post 
	which is of the hobby type 'sword collecting' */
	const swordImage = screen.getByAltText("sword");
	// target aims for the hobby with the key '2' - which is watercolouring
	fireEvent.change(screen.getByLabelText("Displaying:"), {
		target: { value: 2 },
	});
	expect(swordImage).not.toBeInTheDocument();
});
