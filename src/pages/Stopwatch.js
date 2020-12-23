import React from 'react';
import TimerContainer from '../components/ClockContainer';
import ClockControls from '../components/ClockControls';
import ClockTime from '../components/ClockTime';

class Stopwatch extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  constructor(props) {
    super(props);
    this.state = {
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        clockActive: false
    };
  }

  render() {
    return (
      <>
        <TimerContainer>
          <div>
            <h1>The <strong>Stopwatch</strong></h1>
            <ClockTime 
              minutes = {this.state.minutes}
              seconds = {this.state.seconds}
              milliseconds = {this.state.milliseconds}
              redText = {false}
            />
            <ClockControls />
          </div>
        </TimerContainer>
      </>
    );
  }
}

export default Stopwatch;