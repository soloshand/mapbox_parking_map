import React, { Component } from 'react'
import CalloutText from './CalloutTemplate';


const green = {
    
    backgroundColor: 'rgb(149, 207, 62)'
}

const yellow = {

    backgroundColor: 'rgb(255, 206, 52)'
}

const red = {
    backgroundColor: 'rgb(240, 31, 30)'
}


const GreenText = props => (   

    <CalloutText
        lotID = {props.marker.key}
        longitude = {props.marker.coordinate.longitude}
        latitude= {props.marker.coordinate.latitude}
        title = {props.marker.description}
        available = {props.marker.available}
        capacityText = {props.capacityText}
        closeDetails={props.closeDetails}
        type={props.type}
    >
    </CalloutText>
    
);

const YellowText = props => (

    <CalloutText
        lotID = {props.marker.key}
        longitude = {props.marker.coordinate.longitude}
        latitude= {props.marker.coordinate.latitude}
        title = {props.marker.description}
        available = {props.marker.available}
        capacityText = {props.capacityText}
        closeDetails={props.closeDetails}
        type={props.type}
    />
);

const RedText = props => (
    <CalloutText
        lotID = {props.marker.key}
        longitude = {props.marker.coordinate.longitude}
        latitude= {props.marker.coordinate.latitude}
        title = {props.marker.description}
        available = {props.marker.available}
        capacityText = {props.capacityText}
        closeDetails={props.closeDetails}
        type={props.type}
    />
);

export {GreenText, YellowText, RedText};
