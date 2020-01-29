import React from 'react';

const UNITS = {
    'km' : 'KPH',
    'mi' : 'MPH'
}

class SpeedDisplay extends React.Component{
    constructor(props){
        super(props);
    }
    render(){

        var speed = this.props.speed || 0;
        var units = UNITS[this.props.units || null];

        if(this.props.units === 'mi'){
            speed = this.props.speed / 1.609;
        }

        speed = speed.toFixed(1);


        return(
            <div className = "speed-display">
                <div className = "speed-num">{speed}</div>
                <div className = "speed-unit">{units}</div>
            </div>
        );
    }
}

export default SpeedDisplay;