/* exists in order to add relevant stylings to the navigation bar */

/* uses styled-components in order to add styling to the navigation bar */
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

// sets up the styling for the entire menu
export const Menu = styled.nav`
	background: #0E540D;
	height: 90px;
	justify-content: space-between;
	display: flex;
	padding: 30px;
	z-index: 10;
    font-weight
`;

/* sets up the styling for each of the individual links on the navigation bar*/
export const NavLink = styled(Link)`
    color: #FFFFF5;
    display: flex;
    align-items: center;
    text-decoration: none; 
    padding: 20px;
    height: 100%
    cursor: pointer;

    :hover {
        color: #80c476;
    }
    &.active {
        background-color: #1A4819
    }
`;

/* sets up the style for the menu items asides from the home button */
export const NavMenu = styled.div`
	display: flex;
	align-items: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
