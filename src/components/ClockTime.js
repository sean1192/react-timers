import React from 'react';
import { 
    MDBContainer,
} from 'mdbreact';

const ClockControls = () => {
    
  return (
    <MDBContainer className="text-center">
        <h1 className="clockText">00:00:00</h1>
    </MDBContainer>
  );
};

export default ClockControls;