import React from 'react';
import TimerContainer from '../components/ClockContainer';
import ClockControls from '../components/ClockControls';
import ClockTime from '../components/ClockTime';

class Pomodoro extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
        <TimerContainer>
          <h1>The <strong>Pomodoro Clock</strong></h1>
          <ClockTime />
          <ClockControls />
        </TimerContainer>
      </>
    );
  }
}

export default Pomodoro;