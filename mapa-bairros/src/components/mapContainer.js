import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import { CUSTOM_MAP_STYLE } from "../resource/customMapStyle";

export class MapContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showingInfoWindow: false, 
			activeMarker: {},
			selectedPlace: {}
		};

		this.mapStyle = CUSTOM_MAP_STYLE;

	}

	onMarkerClick = (props, marker, e) => {

		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true
		});
	};

	verifyAnimation(place) 
	{
		if(this.state.activeMarker)
		{
			if(place.label == this.state.activeMarker.name)
			return this.props.google.maps.Animation.BOUNCE;	
		}
		
	}

	verifyIcon(place) 
	{ 
		var icon = {
			scaledSize: new this.props.google.maps.Size(20, 30), // scaled size
			url  : 'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|eb4d4b|40|_|%E2%80%A2' // url

		};
		if(this.state.activeMarker)
		{
			if(place.label == this.state.activeMarker.name)
			{
				icon.url  = 'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|f9ca24|40|_|%E2%80%A2'; // url
			}
		}
		

		return icon;
		
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
				styles={this.mapStyle}
				google={this.props.google}
				zoom={15}
				initialCenter={{
					lat: -22.9475308,
					lng: -43.1834283
				}}
			>
				{this.props.markers.map((place, i) => (
					<Marker ref = {`marker${place.foursquareVenueId}`}
					
						key={place.foursquareVenueId}
						animation= {this.verifyAnimation(place)}
						icon = {this.verifyIcon(place)}
						position={{
							lat: place.latitude,
							lng: place.longitude
						}}
						name={place.label}
						description={place.description}
						pictureUrl={place.pictureUrl}
						category={place.category}
						facebookUsername={place.facebookUsername}
						contact={place.contact}

						onClick={this.onMarkerClick}
					/>

				))}

				<InfoWindow
					marker={this.state.activeMarker}
					visible={this.state.showingInfoWindow}
					onClose={this.onClose}
				>
					<div className="container-info">
						<div className="header-info">
							<h4>{this.state.selectedPlace.name}</h4>
						</div>
						<img
							className="picture"
							src={this.state.selectedPlace.pictureUrl}
							alt={this.state.selectedPlace.label}
							height="200"
							width="220"
						/>
						<div className="place-info">
							<p><span className="info-label">Categoria: </span>
								{this.state.selectedPlace.category ? this.state.selectedPlace.category : ' Não identificada'}

							</p>
							<p><span className="info-label">Facebook: </span>
								{this.state.selectedPlace.contact ? this.state.selectedPlace.contact.facebookUsername : ' Não informado'}

							</p>
							<p><span className="info-label">Contato: </span>

								{this.state.selectedPlace.contact ? this.state.selectedPlace.contact.formattedPhone : ' Não informado'}

							</p>

							<p>
								{this.state.selectedPlace.description}
							</p>
						</div>
					</div>
				</InfoWindow>
			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyCUbaxDM3nSH0GwKUrbbwxyL7ElxhnZolg"
})(MapContainer);
