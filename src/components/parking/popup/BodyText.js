import React from 'react'
import { flattenDiagnosticMessageText } from 'typescript';


const GreenBodyText = props => {
    const { available, capacityText, title } = props;
    return(
        <div style={{display: 'block'}}>
            <div style={{display: 'flex', flexDirection:'row', flexWrap:'wrap', width: '100%'}}>
                <span style={{display:'flex', flexDirection:'column', backgroundColor: 'rgb(149, 207, 62)', fontWeight: 'bold', width: '35%', alignItems: 'center'}}>Open</span>
                <span style={{display:'flex', flexDirection:'column',fontWeight: 'bold', width: '65%', alignItems: 'center'}}>{title}</span>
            </div>
            <br />
            <p style={{backgroundColor: 'rgb(149, 207, 62)', marginBottom: '0rem', marginTop: '0rem'}}>{available} Spots available &nbsp; &nbsp; &nbsp; {'   '} { capacityText } {' '} Full</p>
        </div>
    );
};

const YelloBodyText = props => {
    const { available, capacityText, title } = props;
    return(
        <div style={{display: 'block'}}>
            <div style={{display: 'flex', flexDirection:'row', flexWrap:'wrap', width: '100%'}}>
                <span style={{display:'flex', flexDirection:'column', backgroundColor: 'rgb(255, 206, 52)', fontWeight: 'bold',width: '35%', alignItems: 'center'}}>Open</span>
                <span style={{display:'flex', flexDirection:'column', fontWeight: 'bold', width: '65%', alignItems: 'center'}}>{title}</span>
            </div>
            <br />
            <p style={{backgroundColor: 'rgb(255, 206, 52)', marginBottom: '0rem', marginTop: '0rem'}}>{available} Spots available &nbsp; &nbsp; &nbsp; {'   '} { capacityText } {' '} Full</p>
        </div>
    );
};

const RedBodyText = props => {
    const { title, available, capacityText } = props;
   
    return(
        <div style={{display: 'block'}}>
             <div style={{display: 'flex', flexDirection:'row', flexWrap:'wrap', width: '100%'}}>
                <span style={{display:'flex', flexDirection:'column', backgroundColor: 'rgb(240, 31, 30)', color:'#fff', fontWeight: 'bold', width: '35%', alignItems: 'center'}}>Full</span>
                <span style={{display:'flex', flexDirection:'column', fontWeight: 'bold', width: '65%', alignItems: 'center'}}>{title}</span>
            </div>
            <br />
            <p style={{backgroundColor: 'rgb(240, 31, 30)', marginBottom: '0rem', marginTop: '0rem'}}>Lot is <span style={{fontWeight:"bold"}}>Full</span> or <span style={{fontWeight:"bold"}}>Few Spaces</span> Available</p>
        </div>
    );
};

export {GreenBodyText, YelloBodyText, RedBodyText};