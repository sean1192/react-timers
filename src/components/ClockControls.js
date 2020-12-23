import React from 'react';
import { 
    MDBContainer,
    MDBBtn,
    MDBIcon
} from 'mdbreact';

const ClockControls = ({type, align='text-center'}) => {

    var play = (<><MDBBtn><MDBIcon icon='play' /></MDBBtn></>);
    var pause = (<><MDBBtn><MDBIcon icon='pause' /></MDBBtn></>);
    var reset = (<><MDBBtn><MDBIcon icon='redo-alt' /></MDBBtn></>);
    var resetLink = (<><a>Reset</a></>);
    var switchClock = (<><MDBBtn><MDBIcon icon='exchange-alt' /> Switch</MDBBtn></>);

    var standard = (
        <>
        {play}
        {pause}
        {reset}
        </>
    );

    var resetOnly = (
        <>
        {resetLink}
        </>
    );

  return (
    <MDBContainer className={align}>
        {(type === 'resetOnly') ? resetOnly : (type === 'switchClock') ? switchClock : standard}
    </MDBContainer>
  );
};

export default ClockControls;