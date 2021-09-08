import React, { Component } from 'react'
import MapGL, {GeolocateControl} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { mapBoxToken } from '../configs'

class Map extends Component {

  constructor(props) {
      super(props);
      this.state = {
            region: {
              width: "100vw",
              height: "100vh",
              latitude: 'lat',
              longitude: 'long',
              zoom: 15
          }
      };
    }
    
    
    componentDidMount() {

        navigator.geolocation.getCurrentPosition(
          ({coords}) => {
            const {latitude, longitude}  = coords;
            this.setState({
              position: {
                longitude,
                latitude
              }
            });          
          },
          error => alert('Error: Are location services on?'),
          {enableHighAccuracy: true}
        );
        this.watchID = navigator.geolocation.watchPosition(({coords}) => {
          const {latitude, longitude}  = coords;
          this.setState({
            position: {
              longitude,
              latitude
            }
          });

        });


    } //end of componentWillMount

    _updateViewPort = region => {
      this.setState({region});
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

render() {
  const region = this.state.region;
  const position = this.state.position;

  return (
     <div style={{margin: '0 auto', width:'100%', height: '100%'}}>
      <MapGL
         {...region}
        mapboxApiAccessToken={mapBoxToken}
        mapStyle="mapbox://styles/mapbox/satellite-v9"
         onViewportChange={this._updateViewPort}
        captureDrag={false}
        caputerDoubleClick={false}
        dragPan = {true}
        scrollZoom = {true}
        onStyleLoad
      >
       <GeolocateControl 
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
        />
         {this.props.children}
      </MapGL>
    </div>

  );
}

}

export default Map;