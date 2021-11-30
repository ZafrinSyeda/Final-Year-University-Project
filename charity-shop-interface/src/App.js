/* This page will manage all of the paths within the page, and link everything together for the website to work as one cohesive unit */

import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import CollectionBooking from "./pages/collectionBooking";
import About from "./pages/About";
import ColllectionForm from "./pages/bookingFormPages/CollectionForm";
import Shop from "./pages/Shop";
import Donate from "./pages/Donate.js";

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				{/* Route that directs to the home page */}
				<Route path="/" exact component={Home} />
				{/* Route that directs to the 'book a collection' page */}
				<Route path="/book-collection" exact component={CollectionBooking} />
				{/* Route that directs to the about us page */}
				<Route path="/about" exact component={About} />
				{/* Route that directs to the shop page */}
				<Route path="/shop" exact component={Shop} />
				{/* Route that directs to the collection booking form */}
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
