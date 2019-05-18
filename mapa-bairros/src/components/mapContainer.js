import React, { Component } from 'react';
import { Map, GoogleApiWrapper,  InfoWindow, Marker } from 'google-maps-react';
import {PLACES} from '../resource/places';
const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {

  state = {
    showingInfoWindows: false,
    activeMarker: {},
    selectedPlace: {}
  }

  componentDidMount(){
    console.log("INICIANDO COMPONENTE...", PLACES);
  }

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

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
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
      >
      <Marker onClick={this.onMarkerClick}
      name={'Kenyatta International Convention Centre'}>

      </Marker>

      <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCUbaxDM3nSH0GwKUrbbwxyL7ElxhnZolg'
})(MapContainer);