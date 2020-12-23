import React from 'react';
import { 
    MDBContainer,
    MDBBtn,
    MDBIcon
} from 'mdbreact';

const ClockControls = () => {
    
  return (
    <MDBContainer className="text-center">
        <MDBBtn><MDBIcon icon='play' /></MDBBtn>
        <MDBBtn><MDBIcon icon='pause' /></MDBBtn>
        <MDBBtn><MDBIcon icon='redo-alt' /></MDBBtn>
    </MDBContainer>
  );
};

export default ClockControls;