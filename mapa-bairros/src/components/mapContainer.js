import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

export class MapContainer extends Component {
	

	constructor(props) {
		super(props);
console.log("PROPS QUE CHEGAM NO CONTAINER", props);
		this.state = {
			showingInfoWindows: false,
			activeMarker: {},
			selectedPlace: {}
		};
	}
	

	
	onMarkerClick = (props, marker, e) =>
	{
		console.log("SELECIONADO!", props );
		console.log("SELECIONADO MARKER!", marker );
		//console.log("THIS PROPS CONTAINER", this.props);


		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true
		});

	}

	onClose = props => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			});
		}
	};
	render() {
		return (
			<Map
				id="mapContainer"
				google={this.props.google}
				zoom={15}
				initialCenter={{
					lat: -22.9475308,
					lng: -43.1834283
				}}
			>
				{	this.props.markers.map((place, i) => (
					<Marker
						key={place.foursquareVenueId}
						position={{
							lat: place.latitude,
							lng: place.longitude
						}}
						name={place.label}
						pictureUrl = {place.pictureUrl}
						onClick={this.onMarkerClick}
					/>
					
				))}

				<InfoWindow
					marker={this.state.activeMarker}
					visible={this.state.showingInfoWindow}
					onClose={this.onClose}
				>
					<div>
						<h4>{this.state.selectedPlace.name}</h4>
			<img className ="picture" src= {this.state.selectedPlace.pictureUrl} 
			alt="Legenda da Imagem" height="200" width="220">
            </img>

					</div>
				</InfoWindow>
			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyCUbaxDM3nSH0GwKUrbbwxyL7ElxhnZolg"
})(MapContainer);
