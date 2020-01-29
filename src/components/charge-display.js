import React from 'react';

import charge_high from '../imgs/sun_charge/charge_high.svg';
import charge_med from '../imgs/sun_charge/charge_med.svg';
import charge_low from '../imgs/sun_charge/charge_low.svg';
import sun_high from '../imgs/sun_charge/sun_high.svg';
import sun_med from '../imgs/sun_charge/sun_med.svg';
import sun_low from '../imgs/sun_charge/sun_low.svg';

const PLUG_IMGS = {
    h : <img src = {charge_high} className = "sun-and-plug"></img>,
    m : <img src = {charge_med} className = "sun-and-plug"></img>,
    l : <img src = {charge_low} className = "sun-and-plug"></img>,
    n : null
}

const SUN_IMGS = {
    h : <img src = {sun_high} className = "sun-and-plug"></img>,
    m : <img src = {sun_med} className = "sun-and-plug"></img>,
    l : <img src = {sun_low} className = "sun-and-plug"></img>,
    n : null
}

class ChargeDisplay extends React.Component{

    constructor(props){
        super(props);
    }        
    render(){


        var plug_img = PLUG_IMGS[this.props.charge_level || 'l'];
        var sun_img = SUN_IMGS[this.props.charge_level || 'l'];

        return(
            <div className = "charge-display">
                {plug_img}
                {sun_img}
            </div>
        );
    }
}

export default ChargeDisplay;