import React from "react";
import { Map, GoogleApiWrapper, HeatMap } from "google-maps-react";
import './static/css/home.css';
import { GridLoader } from "react-spinners";

class MapContainer extends React.Component {

  // constructior to set the states time passed variable to false
  constructor(props){
    super(props);
    this.state = {
      timePassed: false
    }
  }

  render() {
    // these are the values of the heatmap with green for the lowest value and red for the highest
    const gradient = ["rgba(102, 255, 0, 0)",
    "rgba(102, 255, 0, 1)",
    "rgba(147, 255, 0, 1)",
    "rgba(193, 255, 0, 1)",
    "rgba(238, 255, 0, 1)",
    "rgba(244, 227, 0, 1)",
    "rgba(249, 198, 0, 1)",
    "rgba(255, 170, 0, 1)",
    "rgba(255, 113, 0, 1)",
    "rgba(255, 57, 0, 1)",
    "rgba(255, 0, 0, 1)"];

    //variable t is the settimeout function, after 1 second it would timeout
    var t = setTimeout(() => {this.setState({timePassed: true})}, 1000);
    if (!this.state.timePassed){
      //the gridloader would load for 1 second to give time for the map to
      // be able to read all the data points
      return(
      <div>
        <GridLoader
        color={"#4A90E2"}
        loading={true}
        size={100}
      />
      </div>
      );
    }else{
      // after 1 second the timeout is cleared and the map is loaded
      clearTimeout(t);
       return (
      <div className="map-container">
        {/* this is the actual map with its properties */}
        <Map
          google={this.props.google}
          className={"map"}
          zoom={14}
          initialCenter={this.props.center}
          onReady={this.handleMapReady}
        >
            {/* this is the heatmap layer that goes over the map and its properties */}
          <HeatMap
            gradient={gradient}
            positions={this.props.data}
            opacity={1}
            radius={30}
          />
        </Map>
      </div>
    );
    }
  }
}

export default GoogleApiWrapper({
    // google api key
  apiKey: "AIzaSyBtYIImGTFHEmtqutvW6zWP0okemopwExU",
  libraries: ["visualization"]
})(MapContainer);
