import React, { Component } from 'react'
import ParkingMap from '../map/map_view'


class Parking extends Component {

    constructor(props) {
        super(props);
    }
//Add Firebase Calls here to setup full parking map functionality

    render() {
        return (
            <ParkingMap></ParkingMap>
        )
    }
}

export default Parking;