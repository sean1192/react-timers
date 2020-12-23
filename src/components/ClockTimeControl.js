import React from 'react';
import { 
    MDBContainer,
    MDBRow
} from 'mdbreact';

const ClockTimeControl = (props) => {
    return (
        <MDBContainer>
            <MDBRow>
                <p className="timeTitle">{props.title}</p>
            </MDBRow>
            
            <MDBRow>
                <button className="timeButton" onClick={()=>props.increment(props.title)}>+</button>
                <p className="timeLabel">{props.length} mins</p>
                <button className="timeButton" onClick={()=>props.decrement(props.title)}>-</button>
            </MDBRow>
        </MDBContainer>
    );
};

export default ClockTimeControl;