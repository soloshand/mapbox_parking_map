import React from 'react'
import { Popup } from 'react-map-gl'
import Message from './popup/Message'


const CallOut = props => {

    const { marker, type, capacityText, selectedParkingLot, closeDetails } = props;

    return(
            <Message
                marker={marker}
                capacityText={capacityText}
                type={type}
                closeDetails={closeDetails}
            />
        );
}

export default CallOut;