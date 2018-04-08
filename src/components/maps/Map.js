import React from "react";
import { ReactDOM } from "react-dom";
import PropTypes from "prop-types";

export class Map extends React.Component {
  constructor(props) {
    super(props);

    const { lat, lng } = this.props.initialCenter;

    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      }
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  componentDidMount() {
    this.loadMap();
  }

  loadMap() {
    if (this.props && this.props.google) {
      const { google } = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let { initialCenter, zoom } = this.props;
      const { lat, lng } = this.state.currentLocation;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign(
        {},
        {
          center: center,
          zoom: zoom
        }
      );
      this.map = new maps.Map(node, mapConfig);
    }
  }

  render() {
    return <div ref="map">Laster kart...</div>;
  }
}

Map.propTypes = {
  google: PropTypes.object,
  zoom: PropTypes.number,
  initialCenter: PropTypes.object
};

Map.defaultProps = {
  zoom: 13,
  initialCenter: {
    lat: 37.774929,
    lng: -122.419416
  }
};
