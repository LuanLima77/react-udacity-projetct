import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import MapContainer from "./components/mapContainer";
import { PLACES } from "./resource/places";
import { FourSquareAPI } from "./endpoint/FourSquareAPI";
import { useAlert } from 'react-alert'



export class App extends Component {
	 alert = useAlert();

   
   constructor(props) {
		super(props);

		this.state = {
			cssClass: "sidebar",
			markers: PLACES,
			showingInfoWindow : false
		};
		this.openNav = this.openNav.bind(this);
		this.handleChangeFilter = this.handleChangeFilter.bind(this);
		this.filterMap = this.filterMap.bind(this);
		this.clearFilter = this.clearFilter.bind(this);

	}




	componentDidMount() {
	 this.initializeFoursquarePictures();
	 alert.show("ABC");

	}

	initializeFoursquarePictures()
	{
		/** 
		this.state.markers.forEach(place => {
			FourSquareAPI.getPicturesByVenueId(place.foursquareVenueId).then(data => {
        var venue = data.response.venue;
        var photoUrl = FourSquareAPI.buildPictureUrl(venue);
		place.pictureUrl = photoUrl;
		console.log("PLACE",place);
        
			});
		});
		*/
      var markersModified = this.state.markers;
		FourSquareAPI.getPicturesByVenueId(markersModified[0].foursquareVenueId).then(data => {
			var venue = data.response.venue;
			console.log("VENUE FROM API", venue);
			var photoUrl = FourSquareAPI.buildPictureUrl(venue);
			markersModified[0].pictureUrl = photoUrl;
			this.setState({
				markers : markersModified
			});
			console.log("PLACE",this.state.markers[0]);
			
				})
			

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
			var filteredMarker = PLACES.filter(marker => marker.label.includes(term));
			console.log("MARCADOR Q FICA...", filteredMarker);
			this.setState({ markers: filteredMarker, activeMarker : filteredMarker[0], showingInfoWindow: true});

			console.log(this.state);


		}
	}


   openNav() {
		if (this.state.cssClass === "sidebar") {
			this.setState({ cssClass: 'sidebar openSidebar' });

		} else {
			this.setState({ cssClass: 'sidebar' });

		}

	}

	clearFilter()
{
	this.setState({markers : PLACES});

}

	render() {
		return (
			<div>
				
				<Header handleChangeFilter={this.handleChangeFilter} openNav = {this.openNav} markers={this.state.markers}/>
				<Sidebar filterMap  = {this.filterMap}  closeNav = {this.openNav} 
				cssClass = {this.state.cssClass}  clearFilter = {this.clearFilter} />
				
				<MapContainer  markers={this.state.markers} 
					  />

			</div>
		);
	}
}

export default App;
