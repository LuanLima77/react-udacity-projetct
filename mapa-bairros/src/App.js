import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import MapContainer from "./components/mapContainer";
import { PLACES } from "./resource/places";
import { FourSquareAPI } from "./endpoint/FourSquareAPI";

import Simplert from "react-simplert";

export class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cssClass: "sidebar",
			markers: PLACES,
			showingInfoWindow: false,
			showAlert: false,
			typeAlert: "error"
		};
		this.openNav = this.openNav.bind(this);
		this.handleChangeFilter = this.handleChangeFilter.bind(this);
		this.filterMap = this.filterMap.bind(this);
		this.clearFilter = this.clearFilter.bind(this);
	}

	componentDidMount() {
		this.initializeFoursquarePictures();
	}

	initializeFoursquarePictures() {
		let markersModified = Object.assign([], this.state.markers);

		markersModified.forEach(place => {
			FourSquareAPI.getPicturesByVenueId(place.foursquareVenueId).then(data => {
				console.log("VENUE FROM API", venue);

				var venue = data.response.venue;
				if (venue) {
				var photoUrl = FourSquareAPI.buildPictureUrl(venue);
				place.pictureUrl = photoUrl;
				
					place.category = venue.categories[0].name;

					place.contact = venue.contact.formattedPhone;
					place.facebookUsername = "/" + venue.contact.facebookUsername;
				}
				console.log("PLACE", place);
			});
		});

		this.setState({
			markers: markersModified
		});

		/** 
		var markersModified = this.state.markers;
		FourSquareAPI.getPicturesByVenueId(markersModified[0].foursquareVenueId)
		.then(data => {
			if (data.response) {
				var venue = data.response.venue;
				console.log("VENUE FROM API", venue);
				console.log("CATEGORY", venue.categories[0].name);
				console.log("TELLPHONE:", venue.contact.formattedPhone);
				console.log("FACEBOOK:", venue.contact.facebookUsername);

				var photoUrl = FourSquareAPI.buildPictureUrl(venue);
				markersModified[0].pictureUrl = photoUrl;
				markersModified[0].category = venue.categories[0].name;
				markersModified[0].contact = venue.contact.formattedPhone;
				markersModified[0].facebookUsername = "/" + venue.contact.facebookUsername;
				this.setState({
					markers: markersModified
				});
				console.log("PLACE", this.state.markers[0]);
			}

		})
			.catch( error => 
				{
					this.setState({
						showAlert: true,
						titleAlert: "Erro !",
						messageAlert: "Não foi possível recuperar as ilustrações dos locais representados."
					})
				});
		;
*/

		console.log("PLACES WITH URL", this.state.markers);
	}

	/**
	 * Recebe o evento onChange da busca e filtra o mapa em tela a partir do termo informado.
	 * @param {OnChange do input de busca} event
	 */
	handleChangeFilter(event) {
		var filter = event.target.value;
		if (filter.length) {
			var filteredMarkers = PLACES.filter(marker =>
				marker.label.includes(filter)
			);
			this.setState({ markers: filteredMarkers });
		} else {
			this.setState({ markers: PLACES });
		}
	}

	/**
	 * Filtra o mapa a partir do menu lateral, deixando apenas o marcador filtrado em tela.
	 * @param {termo filtrado} term
	 */
	filterMap(term) {
		if (term) {
			var filteredMarker = PLACES.filter(marker => marker.label.includes(term));
			console.log("MARCADOR Q FICA...", filteredMarker);
			this.setState({
				markers: filteredMarker,
				activeMarker: filteredMarker[0],
				showingInfoWindow: true
			});

			console.log(this.state);
		}
	}

	/**
	 * Abre o menu lateral expansivel
	 */
	openNav() {
		if (this.state.cssClass === "sidebar") {
			this.setState({ cssClass: "sidebar openSidebar" });
		} else {
			this.setState({ cssClass: "sidebar" });
		}
	}

	/**
	 * Retorna todos os marcadores em tela
	 */
	clearFilter() {
		this.setState({ markers: PLACES });
	}

	render() {
		return (
			<div>
				<Header
					handleChangeFilter={this.handleChangeFilter}
					openNav={this.openNav}
					markers={this.state.markers}
				/>
				<Sidebar
					filterMap={this.filterMap}
					closeNav={this.openNav}
					cssClass={this.state.cssClass}
					clearFilter={this.clearFilter}
				/>

				<MapContainer markers={this.state.markers} />

				<Simplert
					showSimplert={this.state.showAlert}
					type={this.state.typeAlert}
					title={this.state.titleAlert}
					message={this.state.messageAlert}
				/>
			</div>
		);
	}
}

export default App;
