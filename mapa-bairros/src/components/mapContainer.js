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
    PLACES.forEach(place => {
      console.log("THIS IS A PLACE", place);
      
    });
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
        zoom={15}
        style={mapStyles}
        initialCenter={{
         lat: -22.9475308,
         lng: -43.1834283

        }}
      >
     {PLACES.map((place, i) =>
  <Marker position = {{
    lat: place.latitude,
    lng: place.longitude

   }}
   name = {place.label}
   onClick={this.onMarkerClick}
 >
 </Marker>        )}
     

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