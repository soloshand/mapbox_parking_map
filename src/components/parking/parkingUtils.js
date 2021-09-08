const greenMarker = require('../parking/icons/icon-green.png');
const yellowMarker = require('../parking/icons/icon-yellow.png');
const redMarker = require('../parking/icons/icon-red.png');

const getCurrentCapacity = marker => (marker.capacity - marker.available) / marker.capacity;

const getMarkerImg = marker => {

    const capacityFullness = getCurrentCapacity(marker);

    if(!Number.isNaN(capacityFullness)) {
        
        const color = {
            green: {
                type: 'green',
                img: greenMarker
            },
            yellow: {
                type: 'yellow',
                img: yellowMarker
            },
            red: {
                type: 'red',
                img: redMarker
            }
        };

        const threshold = {
            red: 0.95,
            yellow: 0.7
        };

        let lotColor = color.green;
        lotColor = capacityFullness > threshold.yellow ? color.yellow : lotColor;
        lotColor = capacityFullness > threshold.red ? color.red : lotColor;
        return lotColor;
    }

    return new Error('Not a number');
};


const getCurrentCapText = (marker) => {
    const capacityFullness = getCurrentCapacity(marker);

    if(!Number.isNaN(capacityFullness)) return `${Math.ceil(capacityFullness * 100)}%`;
    return new Error('Not a Number.');
}

export { getMarkerImg, getCurrentCapText }
