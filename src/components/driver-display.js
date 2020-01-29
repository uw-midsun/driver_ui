import React from "react";
import TimeDisplay from "./time.js";
import SpeedDisplay from "./speed.js";
import DriveStateDisplay from "./drive-state.js";
import RangeBar from "./range.js";
import ChargeDisplay from "./charge-display.js";
import TurnSignals from "./turn-signals.js";



class DriverDisplay extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            
            battery_percentage : 60,
            charge_level : 'h',
            drive_state : 'd',
            signal_state : 'h',
            units : 'mi',
            speed : 100,
            range : 500,
            current_time : this.newTime(),
        };
    }

    componentDidMount(){//adds update timer for DriverDisplay
        
        this.intervalID = setInterval(
            () => this.tick(),
            700
        );
    }
    componentWillMount(){
        clearInterval(this.intervalID);
    }
    tick(){//temporarily increases battery percentage for testing the bar
    
        this.setState({//this will in theory update all of the state variables per tick
            
            current_time: this.newTime(),//updates the time
            charge_level: this.getChargeLevel()
        });
    }

    //for getting the time, should be moved to separate js file
    formatHour(i){
        if(i>12){
            i-=12;
        }
        if(i<10){
            i = '0'+i;
        }
        return i;
    }
    formatMinute(i){
        if(i<10){
            i = '0'+i;
        }
        return i;
    }
    newTime(){
        var d = new Date();
        var h = this.formatHour(d.getHours());
        var m = this.formatMinute(d.getMinutes());
        var suffix = (d.getHours<12) ? 'AM' : 'PM';
        return(h+':'+m)+' '+suffix;
    }

    getChargeLevel(){
        var charge;
        var percentage = this.state.battery_percentage;
        if(percentage > 66){
            charge = 'h';
        }else if(percentage > 33){
            charge = 'm';
        }else{
            charge = 'l';
        }
        return charge;
    }

    

    render(){
        return(
            <div className="display">
                <TimeDisplay 
                time = {this.state.current_time}/>
                <SpeedDisplay 
                    speed = {this.state.speed}
                    units = {this.state.units} />
                <DriveStateDisplay 
                    drive_state = {this.state.drive_state}/>
                <RangeBar 
                    percentage = {this.state.battery_percentage} 
                    charge_level = {this.state.charge_level}
                    units = {this.state.units}
                    range = {this.state.range} />
                <ChargeDisplay 
                    charge_level = {this.state.charge_level} />
                <TurnSignals 
                    signal_state = {this.state.signal_state}/>
            </div>
        );
    }


}




export default DriverDisplay;