import { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './Map.scss';

// const mapStyles = {
//   maxWidth: '400px',
//   maxHeight: '400px'
// };

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