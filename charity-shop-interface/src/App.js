/* This page will manage all of the paths within the page, and link everything together for the website to work as one cohesive unit */

import React from "react";
import "./App.css";
import Navbar from "./includes/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import CollectionBooking from "./pages/collectionBooking";
import About from "./pages/about";
import ColllectionForm from "./pages/bookingFormPages/CollectionForm";
import Shop from "./pages/Shop";
import Donate from "./pages/Donate.js";

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/book-collection" exact component={CollectionBooking} />
				<Route path="/about" exact component={About} />
				<Route path="/shop" exact component={Shop} />
				<Route path="/make-donation" exact component={Donate} />
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
