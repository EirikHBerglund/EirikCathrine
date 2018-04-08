import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends React.Component {
  onMarkerClick() {}

  render() {
    const markerTitle = "Os Kyrkje";

    const style = {
      width: "70vw",
      height: "50vh"
    };

    return (
      <Map
        google={this.props.google}
        zoom={14}
        className="map-window"
        style={style}
        initialCenter={this.props.initialLocation}
      >
        <Marker
          title={"Os Kyrkje"}
          onClick={this.onMarkerClick}
          name={"Os Kyrkje"}
        />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>InfoWindow</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAbvXFYz8-l3sNyDt5l8fjyUt2DvxA2nfA"
})(MapContainer);
