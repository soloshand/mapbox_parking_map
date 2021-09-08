import React, {Component } from 'react';
import { Marker, Popup } from 'react-map-gl';
import Callout from './Callout'
import { getMarkerImg, getCurrentCapText } from './parkingUtils';

class ParkingMarker extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedParkingLot: null
        }
        
      this.closeCurrentLocation = this.closeCurrentLocation.bind(this);
    }

    selectedParkingLot = object => {
        this.setState({
            selectedParkingLot: object
        })
    }

    /*
        Close the Popup Modal
    */
    closeCurrentLocation = () => {
        this.setState({
            selectedParkingLot: null
        });
    }

    render() {
        
        const { marker } = this.props;
        const { img, type } = getMarkerImg(marker);

        return (
            <div>
            <Marker
                key={marker.key}
                latitude={marker.coordinate.latitude}
                longitude={marker.coordinate.longitude}
                ref={ref => {this.mapMarker = ref; }}
             >
                 <img 
                    src={img} 
                    style={{height: 40 + "px" }}
                    onClick={() => {this.selectedParkingLot(marker);}}
                />
            </Marker>
             {this.state.selectedParkingLot !== null ? (
                 <Callout type={type} marker={marker} capacityText={getCurrentCapText(marker)} closeDetails = {this.closeCurrentLocation} /> 
            ) : null }
                
            </div> 
        );
    }

}

export default ParkingMarker;