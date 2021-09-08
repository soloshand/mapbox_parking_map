import React from 'react'
import { GreenText, YellowText, RedText } from './Text'

const Message = props => {

    const {marker, type, capacityText, closeDetails} = props;
   
    let MSG = GreenText;
    MSG = type === 'yellow' ? YellowText : MSG;
    MSG = type === 'red' ? RedText : MSG;

    return (
        <MSG 
            marker = {marker}
            capacityText = {capacityText}
            closeDetails={closeDetails}
            type={type}
        />

    );
};

export default Message;
