/* used to represent the different themes that the user's profile can change colour into */
import { createGlobalStyle } from "styled-components";

/* a theme that mainly consists of black, whites and greys */
export const monochrome = {
	background: "#f0f0f0",
	main_colour: "#111",
	accent: "#7f7f7f",
};

/* a theme that is more brown and warm */
export const coffeeshop = {
	background: "#EDDCC8",
	main_colour: "#9F7369",
	accent: "#D6A988",
};

/* would apply a global style to aspects that would change colour depending on the theme that 
has been selected */
export const GlobalStyles = createGlobalStyle`

body { 
    background-color: ${(props) => props.theme.background}
}

button {
	background-color: ${(props) => props.theme.accent}
}

button:hover{
	background-color: ${(props) => props.theme.main_colour}
}
`;
