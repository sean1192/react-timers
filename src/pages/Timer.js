import React from 'react';
import {
  MDBContainer,
  MDBAnimation
//   MDBCol,
//   MDBRow,
} from 'mdbreact';

class Timer extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
        <MDBAnimation type='slideInUp' duration='500ms'>
          <div className='mt-3 mb-5'>
              <MDBContainer>
                  Timer
              </MDBContainer>
          </div>
        </MDBAnimation>
      </>
    );
  }
}

export default Timer;