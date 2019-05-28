import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import MapContainer from "./components/mapContainer";
import { PLACES } from "./resource/places";

import FakeMap from "./fakeMap";

export class App extends Component {
	//    <MapContainer markers = "{places}"></MapContainer>
   //    <FakeMap></FakeMap>
   
   constructor(props) {
		super(props);

		this.state = {
			cssClass: "sidebar",
			markers: PLACES
		};
		this.openNav = this.openNav.bind(this);
		this.handleChangeFilter = this.handleChangeFilter.bind(this);


	}

	handleChangeFilter(event)
	{
      var filter = event.target.value;
      if(filter.length)
      {
		var markers = this.state.markers;
		console.log(markers);
        var filteredMarkers = markers.filter(marker => marker.label.includes(filter));
        this.setState({ markers: filteredMarkers});
      }
    }


   openNav() {
		if (this.state.cssClass === "sidebar") {
			this.setState({ cssClass: 'sidebar openSidebar' });

		} else {
			this.setState({ cssClass: 'sidebar' });

		}

	}


	render() {
		return (
			<div>
				<Header handleChangeFilter={this.handleChangeFilter} openNav = {this.openNav} markers={this.state.markers}/>
				<Sidebar   closeNav = {this.openNav} cssClass = {this.state.cssClass} />
				
				<MapContainer markers={this.state.markers} />
			</div>
		);
	}
}

export default App;
