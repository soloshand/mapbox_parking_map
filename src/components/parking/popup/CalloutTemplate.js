import React, {Component} from 'react'
import { Popup } from 'react-map-gl'
import { GreenBodyText, YelloBodyText, RedBodyText } from './BodyText'


class CalloutText extends Component {

    
    generateTextBlock(blockType, available, title, capacityText) {

        switch(blockType) {
            case 'green': 
                return <GreenBodyText title={title} available={available} capacityText={capacityText} />;
            case 'yellow':
                return <YelloBodyText title={title} available={available} capacityText={capacityText} />;
            case 'red':
                    return <RedBodyText title={title} />;
            default:
                return '';
        }
    }

   render() {
       
      const {lotID, longitude, latitude, title, available, capacityText, style, closeDetails, type } = this.props;
      return (

        <Popup
            key = {lotID}
            latitude = {parseFloat(latitude)}
            longitude = {parseFloat(longitude)}
            style={style}
            onClose = { closeDetails }
        >              
         { this.generateTextBlock(type, available, title, capacityText) }
        </Popup>

      );
   }


}

export default CalloutText;