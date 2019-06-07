import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import { CUSTOM_MAP_STYLE } from "../resource/customMapStyle";

export class MapContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showingInfoWindows: false,
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
					<Marker
						key={place.foursquareVenueId}
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
