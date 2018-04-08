import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
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
        onClick={this.onMapClicked.bind(this)}
      >
        <Marker
          title={this.props.placeName}
          name={this.props.placeName}
          onClick={this.onMarkerClick.bind(this)}
        />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h6>{this.props.placeName}</h6>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAbvXFYz8-l3sNyDt5l8fjyUt2DvxA2nfA"
})(MapContainer);
