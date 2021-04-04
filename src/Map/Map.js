// import React from 'react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper, LoadScript} from 'google-maps-react';

// export default function OfficeMap() {
//     return (
//     <GoogleApiWrapper apiKey={process.env.REACT_APP_API_KEY}>
//         <Map 
//             className="map-container"
//             zoom={14}
//             tyle={{width: '100%', height: '100%'}}
//         >
//             <Marker 
//                 title="Callahan Lovecchio Law"
//                 name="Callahan lovecchio Law"
//                 position={{lat: 41.24048349517239, lng: -77.01125053024998}}
//             />

//         </Map>
//     </GoogleApiWrapper>
//     )
// }

import { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '45%',
  height: '45%'
};

export class MapContainer extends Component {
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
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(MapContainer);