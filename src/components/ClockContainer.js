import React from 'react';
import { 
    MDBContainer,
    MDBAnimation,
    MDBJumbotron 
} from 'mdbreact';

const TimerContainer = ({children}) => {
    
  return (
    <MDBAnimation type='slideInDown' duration='500ms'>
        <MDBJumbotron fluid className="jumboContainer">
            <MDBContainer>
                {children}
            </MDBContainer>
        </MDBJumbotron>
    </MDBAnimation>
  );
};

export default TimerContainer;