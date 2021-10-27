/* This page will manage all of the paths within the page, and link everything together for the website to work as one cohesive unit */

import React from "react";
import "./App.css";
import Navbar from "./includes/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import CollectionBooking from "./pages/collectionBooking";
import VoidPage from "./pages/voidPage";
import ColllectionForm from "./pages/bookingFormPages/CollectionForm";

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/book-collection" exact component={CollectionBooking} />
				<Route path="/about" exact component={VoidPage} />
				<Route path="/contact-us" exact component={VoidPage} />
				<Route path="/shop" exact component={VoidPage} />
				<Route path="/make-donation" exact component={VoidPage} />
				<Route
					path="/book-collection/collection-form"
					exact
					component={ColllectionForm}
				/>
			</Switch>
		</Router>
	);
}

export default App;
