import React from 'react';
import { 
    MDBContainer,
    MDBBtn,
    MDBIcon
} from 'mdbreact';

const ClockControls = (props) => {

    var play = (<><MDBBtn onClick={props.play}><MDBIcon icon='play' /></MDBBtn></>);
    var pause = (<><MDBBtn onClick={props.pause}><MDBIcon icon='pause' /></MDBBtn></>);
    var reset = (<><MDBBtn onClick={props.reset}><MDBIcon icon='redo-alt' /></MDBBtn></>);
    var resetLink = (<><a onClick={props.reset}>Reset</a></>);
    var switchClock = (<><MDBBtn onClick={props.switchClock}><MDBIcon icon='exchange-alt' /> Switch</MDBBtn></>);

    var standard = (
        <>
        {play}
        {pause}
        {reset}
        </>
    );

    return (
    <MDBContainer className={props.align}>
        {(props.type === 'resetOnly') ? resetLink : (props.type === 'switchClock') ? switchClock : standard}
    </MDBContainer>
    );
};

export default ClockControls;