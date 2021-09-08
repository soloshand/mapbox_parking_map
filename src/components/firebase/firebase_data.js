import React, { Component } from 'react'
import firebase from './firebase';

class generateFirebaseList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            markers: []
        }
    }

    componentDidMount() {

        this.dbRef = firebase.database().ref('/parking-app');
        this.dbRef.on('value', snapshot =>{
            
            const markers = [];
            const snap = snapshot.val();

            Object.keys(snap.parking).forEach(key => {

                if(snap.parking[key].enabled) {
                    const lot = snap.parking[key];
                    const {capacity} = lot.t2;
                    let { available } = lot.t2;

                    if (available > capacity) available = capacity;

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
                    });
                }
            });

            this.setState({markers});
        });
    }
    componentWillUnmount() {
        this.dbRef.off();
    }

    render() {
        return (
            <div>
               <h2>Firebase Data</h2>
               {this.state.markers.map(marker => {
                   return(
                       <div key={marker.key}>
                               {marker.key},
                              Description:  {marker.description},
                               {marker.available},
                               {marker.capacity}
                       </div>
                   )
               })}
            </div>
        )
    }


} //end generateFirebaseList

export default generateFirebaseList;