import React from 'react';


class TimeDisplay extends React.Component{

    constructor(props){
        super(props);

        this.state = {

        };
    }

    render(){
        return(
            <div className = "time-display">
                {this.props.time || 0}
            </div>
        );
    }

}


export default TimeDisplay;