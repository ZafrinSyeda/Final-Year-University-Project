import { createGlobalStyle } from "styled-components";

export const monochrome = {
	background: "#f0f0f0",
	main_colour: "#111",
	accent: "#7f7f7f",
};

export const coffeeshop = {
	background: "#EDDCC8",
	main_colour: "#9F7369",
	accent: "#D6A988",
};

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
