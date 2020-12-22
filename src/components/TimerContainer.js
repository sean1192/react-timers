import React from 'react';
import { 
    MDBContainer,
    MDBAnimation,
    MDBJumbotron 
} from 'mdbreact';

const TimerContainer = ({title}) => {
  return (
    <MDBAnimation type='slideInDown' duration='750ms'>
        <MDBJumbotron fluid>
            <MDBContainer>
                <h2>{title}</h2>
            </MDBContainer>
        </MDBJumbotron>
    </MDBAnimation>
  );
};

export default TimerContainer;