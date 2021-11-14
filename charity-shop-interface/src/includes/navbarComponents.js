/* exists in order to add relevant stylings to the navigation bar */

/* uses styled-components in order to add styling to the navigation bar */
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

// sets up the styling for the entire menu

export const Menu = styled.nav`
	background: #0e540d;
	height: 90px;
	justify-content: space-between;
	display: flex;
	padding: 30px;
	z-index: 10;
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
        background-color: #0d470c;
    }
    &.active {
        text-decoration: underline;
        color: #80c476;
        background-color: #0d470c;
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

export const Logo = styled.img`
	width: 80px !important;
	background: #0e540d;
`;
