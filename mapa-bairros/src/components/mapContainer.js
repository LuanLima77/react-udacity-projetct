import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import { CUSTOM_MAP_STYLE } from "../resource/customMapStyle";

export class MapContainer extends Component {
	constructor(props) {
		super(props);
		this.mapStyle = CUSTOM_MAP_STYLE;


	}
	componentDidMount() {
		this.props.setRefs(this.refs);
		console.log("PROPES", this.props);


	}

	
	  /** 
	onMarkerClick = (props, marker, e) => {

		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true
		});
	};
*/
	verifyAnimation(place) 
	{
		if(this.props.state.activeMarker)
		{
			if(place.label == this.props.state.activeMarker.name)
			return this.props.google.maps.Animation.BOUNCE;	
		}
		
	}

	verifyIcon(place) 
	{ 
		var icon = {
			scaledSize: new this.props.google.maps.Size(20, 30), // scaled size
			url  : 'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|eb4d4b|40|_|%E2%80%A2' // url

		};
		if(this.props.state.activeMarker)
		{
			if(place.label == this.props.state.activeMarker.name)
			{
				icon.url  = 'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|f9ca24|40|_|%E2%80%A2'; // url
			}
		}
		

		return icon;
		
	}


	onClose = props => {
		if (this.props.state.showingInfoWindow) {
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

						onClick={this.props.onMarkerClick}
					/>

				))}

				<InfoWindow
					marker={this.props.state.activeMarker}
					visible={this.props.state.showingInfoWindow}
					onClose={this.onClose}
				>
					<div className="container-info">
						<div className="header-info">
							<h4>{this.props.state.selectedPlace.name}</h4>
						</div>
						<img
							className="picture"
							src={this.props.state.selectedPlace.pictureUrl}
							alt={this.props.state.selectedPlace.label}
							height="200"
							width="220"
						/>
						<div className="place-info">
							<p><span className="info-label">Categoria: </span>
								{this.props.state.selectedPlace.category ? this.props.state.selectedPlace.category : ' Não identificada'}

							</p>
							<p><span className="info-label">Facebook: </span>
								{this.props.state.selectedPlace.contact ? this.props.state.selectedPlace.contact.facebookUsername : ' Não informado'}

							</p>
							<p><span className="info-label">Contato: </span>

								{this.props.state.selectedPlace.contact ? this.props.state.selectedPlace.contact.formattedPhone : ' Não informado'}

							</p>

							<p>
								{this.props.state.selectedPlace.description}
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
