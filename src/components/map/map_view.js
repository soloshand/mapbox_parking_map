import React, { Component } from 'react'
import MapGL, { Popup, NavigationControl } from 'react-map-gl'
import Marker from '../parking/Marker'
import 'mapbox-gl/dist/mapbox-gl.css'
import { mapBoxToken } from '../configs'
import firebase from '../firebase/firebase'
//import Marker from '../parking/Marker';

const geolocateStyle = {
    float: 'left',
    margin: '50px',
    padding: '10px'
};

const mbtoken = "mapbox_token";
class Map extends Component {
   
constructor(props) {
    super(props)
    this.state = {
        viewport: {
            width: "100vw",
            height: "100vh",
            latitude: 36.302443,
            longitude: -82.368914,
            zoom: 14
        },
        markers: []
    };
}

componentDidMount() {
    //Get Parking Data from Firebase
    this.dbRef = firebase.database().ref('/parking-app');
    this.dbRef.on('value', snapshot => {
        
        const markers = [];
        const snap = snapshot.val();
        
        Object.keys(snap.parking).forEach(key => {

            if(snap.parking[key].enabled) {
                
                const lot = snap.parking[key];
                const {capacity} = lot.t2;
                let { available } = lot.t2;

                if (available > capacity ) available = capacity;

                markers.push({
                    key,
                    description: lot.t2.description,
                    timestamp: lot.t2.timestamp,
                    coordinate: {
                        latitude: lot.coords.lat,
                        longitude: lot.coords.lng
                    },
                    available,
                    capacity
                }); //end markers array
            }
        });

        this.setState({markers});
    });
}

componentWillUnmount() {
    this.dbRef.off();
}


_updateViewPort = viewport => {
    this.setState({viewport});
}

render() {
    const viewport = this.state.viewport;

    return (

        <div style={{margin: '0 auto', width:'100%', height: '100%'}}>
            <MapGL
                {...viewport}
                mapboxApiAccessToken={mapBoxToken}
                mapStyle="mapbox://styles/mapbox/satellite-v9"
                onViewportChange={this._updateViewPort}
                captureDrag={false}
                caputerDoubleClick={false}
                dragPan = {true}
                scrollZoom = {true}
            >
                {this.state.markers.map(marker =>(
                    <Marker key={marker.key} marker={marker} />
                ))}
               
                        
                </MapGL>
            
        </div>
    )
} //end render function

} //end class Map

export default Map;
