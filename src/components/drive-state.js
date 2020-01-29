import React from 'react';

import park from '../imgs/drive_states/Park.svg';
import reverse from '../imgs/drive_states/Reverse.svg';
import neutral from '../imgs/drive_states/Neutral.svg';
import drive from '../imgs/drive_states/Drive.svg';

const DRIVESTATES = {//array of all drive state images corresponding to the drive states (p,r,n,d)
    p: <img src = {park} alt = 'p'></img>,
    r: <img src = {reverse} alt = 'r'></img>,
    n: <img src = {neutral} alt = 'n'></img>,
    d: <img src = {drive} alt = 'd'></img>
};

class DriveStateDisplay extends React.Component{
    constructor(props){
        super(props);
        
    }
    
    render(){
        return(
            <div className="drive-state-display">
                {DRIVESTATES[this.props.drive_state || 'p']}
            </div>
        );
    }
}

export default DriveStateDisplay;