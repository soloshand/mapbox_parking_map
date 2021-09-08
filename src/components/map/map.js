import React, { Component } from 'react'
//import MapGL, { NavigationControl } from 'react-map-gl';
import ReactMapboxGL, {Layer, Marker, Popup } from 'react-mapbox-gl'
import { mapBoxToken } from '../configs'
import firebase from '../firebase/firebase' 


const Map = ReactMapboxGL({
    accessToken: "mp_access_token"
})

class MapBox extends Component {

    constructor(props) {
        super(props)
        
        const region = {
            latitude: 'lat',
            longitude: 'long',
            latitudeDelta: 0.022,
            longitudeDelta: 0.0221
        };
        
        const mapStyle = "mapbox://styles/mapbox/satellite-v9"

        this.state = {
            viewport: {
                width: "100%",
                height: 1000,
                latitude: 'lat',
                longitude: 'long', 
                zoom: 16,
                scrollZoom: true,
                dragPan: false
            },
            showPopUp: true,
            markers: [],
            region,
            etsuRegion: region
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

            console.log(this.state.markers)
        });
    }

    render() {

        const longitude = this.state.etsuRegion.longitude;
        const latitude = this.state.etsuRegion.latitude;

        return (          
        <Map
            style="mapbox://styles/mapbox/satellite-v9"
            movingMethod={'jumpTo'}
            containerStyle={{
                height: 'calc(100vh - 64px)',
                width: '100%'
            }}
           // center = {[-82.368914, 36.302443]}
           center = {[longitude, latitude]}
            zoom = {[16]}
        >
            <Layer type="symbol" id="marker" >
                <Popup>Test</Popup>
            </Layer>
            <Marker coordinates={['long', 'lat']}>
             
            <img src={"images/location-icon.png"} style={{height: 40 + "px" }}/>
            </Marker>
            <Popup coordinates={['long', 'lat']}>
                    Hello
                </Popup>
            <Marker coordinates={['long', 'lat']}>
                <img src={"images/location-icon.png"} style={{height: 40 + "px" }}/>
            </Marker>
        </Map>

        )
    }
}

export default MapBox;