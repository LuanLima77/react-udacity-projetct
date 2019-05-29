import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import MapContainer from "./components/mapContainer";
import { PLACES } from "./resource/places";
import { FourSquareAPI } from "./endpoint/FourSquareAPI";



export class App extends Component {
   
   constructor(props) {
		super(props);

		this.state = {
			cssClass: "sidebar",
			markers: PLACES
		};
		this.openNav = this.openNav.bind(this);
		this.handleChangeFilter = this.handleChangeFilter.bind(this);


	}
	componentDidMount() {
		this.state.markers.forEach(place => {
			FourSquareAPI.getPicturesByVenueId(place.foursquareVenueId).then(data => {
        var venue = data.response.venue;
        var photoUrl = FourSquareAPI.buildPictureUrl(venue);
		place.pictureUrl = photoUrl;
		console.log("PLACE",place);
        
			});
		});
		console.log("PLACES WITH URL", this.state.markers);
	}



	handleChangeFilter(event)
	{
		console.log("FILTRANDO...");
      var filter = event.target.value;
      if(filter.length)
      {
        var filteredMarkers = PLACES.filter(marker => marker.label.includes(filter));
        this.setState({ markers: filteredMarkers});
	  }else
	  {
		  this.setState({markers : PLACES});
	  }
	}
	
	filterMap(term)
	{
		if(term)
		{
			var filteredMarker = PLACES.find(marker => marker.label.includes(term));
			this.setState({ markers: filteredMarker});


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
				<Sidebar filterMap  = {this.filterMap}  closeNav = {this.openNav} cssClass = {this.state.cssClass} />
				
				<MapContainer markers={this.state.markers} />
			</div>
		);
	}
}

export default App;
