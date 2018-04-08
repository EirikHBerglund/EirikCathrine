import React from "react";
import GoogleApiComponent from "./utils/GoogleApiComponent.js";
import { Map } from "./Map";

class MapContainer extends React.Component {
  render() {
    if (!this.props.loaded) {
      return <div>Laster...</div>;
    }

    const style = {
      width: "100vw",
      height: "100vh"
    };

    return (
      <div style={style}>
        <Map google={this.props.google} />
      </div>
    );
  }
}

export default GoogleApiComponent({
  apiKey: "AIzaSyAbvXFYz8-l3sNyDt5l8fjyUt2DvxA2nfA"
})(MapContainer);
