import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import MapContainer from "./components/mapContainer";
import FakeMap from "./fakeMap";

export class App extends Component {
	//    <MapContainer markers = "{places}"></MapContainer>
   //    <FakeMap></FakeMap>
   
   constructor(props) {
		super(props);

		this.state = {
			cssClass: "sidebar"
		};
		this.openNav = this.openNav.bind(this);


	}


   openNav() {
		console.log("TROCANDO CSS..");
		if (this.state.cssClass === "sidebar") {
			this.setState({ cssClass: 'sidebar openSidebar' });

		} else {
			this.setState({ cssClass: 'sidebar' });

		}

	}

	render() {
		return (
			<div>
				<Header openNav = {this.openNav} />
				<Sidebar closeNav = {this.openNav} cssClass = {this.state.cssClass} />
				<MapContainer markers="{places}" />
			</div>
		);
	}
}

export default App;
