import { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './Map.scss';

console.log(process.env.REACT_APP_API_KEY)
// This is what is causing the error in the console. 
export class MapContainer extends Component {
  render() {
    return (
      <Map
        className="map-container"
        google={this.props.google}
        zoom={14}
        initialCenter={{
         lat: 41.24049963025173,
         lng: -77.01126125983575
        }}
      >
        <Marker lat='41.24049963025173' lng='-77.01126125983575' />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(MapContainer);