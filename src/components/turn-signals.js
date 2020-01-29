import React from 'react';
import left from '../imgs/turn_signals/left.svg';
import right from '../imgs/turn_signals/right.svg';

const LEFT_SIGNAL = <img className = "left-signal"  src = {left}></img>
const RIGHT_SIGNAL = <img className = "right-signal" src = {right}></img>

class TurnSignals extends React.Component{

    constructor(props){
        super(props);

        this.state = {

            signal_state: this.props.signal_state || 'n',

            left_on: false,
            right_on: false
        }
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
    
        var left_is_on = this.state.left_on;
        var right_is_on = this.state.right_on;
        var left_blink_state = this.state.left_blink;
        var right_blink_state = this.state.right_blink;

        if(this.state.signal_state === 'h'){
            left_is_on = !left_is_on;
            right_is_on = !right_is_on;
        }else if(this.state.signal_state === 'l'){
            left_is_on = !left_is_on;
            right_is_on = false;
        }else if(this.state.signal_state === 'r'){
            right_is_on = !right_is_on;
            left_is_on = false;
        }else{
            left_is_on = false;
            right_is_on = false;
        }


        this.setState({//this will in theory update all of the state variables per tick
            left_on : left_is_on,
            right_on : right_is_on,
        });
    }


    render(){
        return(
            <div className='turn-signals'>
                {this.state.left_on && LEFT_SIGNAL}
                {this.state.right_on && RIGHT_SIGNAL}
            </div>
        );
    }
}




export default TurnSignals;