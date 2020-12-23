import React from 'react';
import TimerContainer from '../components/ClockContainer';
import ClockControls from '../components/ClockControls';
import ClockTime from '../components/ClockTime';

class Stopwatch extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
        <TimerContainer>
          <div>
            <h1>The <strong>Stopwatch</strong></h1>
            <ClockTime />
            <ClockControls />
          </div>
        </TimerContainer>
      </>
    );
  }
}

export default Stopwatch;