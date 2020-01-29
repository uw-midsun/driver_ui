import React from 'react';

const COLORS = {
    h : "green",
    m : "yellow",
    l : "red"
};

const UNITS = {
    'km' : 'KM',
    'mi' : 'MI'
}

class RangeBar extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        
        var color = COLORS[this.props.charge_level || 'l'];

        return(
            <div className="range-bar-and-number">
                <Bar 
                color = {color}
                percentage = {this.props.percentage || 0}/>
                <Number 
                range = {this.props.range}
                units = {this.props.units}/>
            </div>
        );
    }
}



class Bar extends React.Component{

    constructor(props){
        super(props);
    }
    
    render(){

        var percentage = this.props.percentage;
        

        return(
            <div className = {"bar " + (this.props.color || 'green')}>
                <div className = "bar-outline">
                    <div className = "bar-fill" style={{width: `${percentage || 50}%`}}></div>
                </div>
            </div>
            
        );
    }
}

class Number extends React.Component{
    render(){
        var range = this.props.range || 0;
        var units = UNITS[this.props.units || null];

        if(this.props.units === 'mi'){
            range = this.props.range / 1.609;
        }

        range = range.toFixed(1);
        return(
            <div className="range-number">{range} {units}</div>
        );
    }
}

export default RangeBar;