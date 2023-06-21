import GoogleMapReact from 'google-map-react';
import './Map.scss';

export default function MapContainer() {
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        className="map-container"
        // google={this.props.google}
        // bootstrapURLKeys={{ key:  }}
        defaultZoom={14}
        defaultCenter={{
          lat: 41.24049963025173,
          lng: -77.01126125983575
        }}
      />
        <div lat='41.24049963025173' lng='-77.01126125983575' />
    </div>
  );
}