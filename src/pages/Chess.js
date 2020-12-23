import React from 'react';
import TimerContainer from '../components/ClockContainer';
import ClockTime from '../components/ClockTime';
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon
} from 'mdbreact';

class Chess extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
        <TimerContainer>
          <h1>The <strong>Chess Clock</strong></h1>
          <MDBRow>
            <MDBCol>
              <h2 className='text-center'>Player 1</h2>
              <ClockTime />
            </MDBCol>

            <MDBCol>
              <h2 className='text-center'>Player 2</h2>
              <ClockTime />
            </MDBCol>
          </MDBRow>

          <div className="text-center"><MDBBtn><MDBIcon icon='exchange-alt' /> Switch</MDBBtn></div>
        </TimerContainer>
      </>
    );
  }
}

export default Chess;