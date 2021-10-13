/* This is a page needed in order to render the web pages and run it properly  */

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
