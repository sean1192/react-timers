import React from 'react';
import TimerContainer from '../components/ClockContainer';
import ClockControls from '../components/ClockControls';
import ClockTime from '../components/ClockTime';
import ClockTimeControl from '../components/ClockTimeControl';

class Timer extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  constructor(props) {
    super(props);
    this.state = {
        minutes: 25,
        seconds: 0,
        milliseconds: 0,
        timerLength: 25,
        clockActive: false
    };

    this.incrementLength = this.incrementLength.bind(this);
    this.decrementLength = this.decrementLength.bind(this);

  }

  incrementLength() {
    var updatedMinutes = this.state.timerLength + 1;

    if (updatedMinutes <= 60) {
      this.setState(state=>({
        timerLength: updatedMinutes,
        minutes: updatedMinutes,
        seconds: 0,
        milliseconds: 0
      }));
    }
  }

  decrementLength() {
    var updatedMinutes = this.state.timerLength - 1;

    if (updatedMinutes >= 1) {
      this.setState(state=>({
        timerLength: updatedMinutes,
        minutes: updatedMinutes,
        seconds: 0,
        milliseconds: 0
      }));
    }
  }

  render() {
    return (
      <>
        <TimerContainer>
          <h1>The <strong>Timer</strong></h1>
          <ClockTimeControl 
            length={this.state.timerLength}
            increment = {this.incrementLength}
            decrement = {this.decrementLength}
          />
          <ClockTime 
            minutes = {this.state.minutes}
            seconds = {this.state.seconds}
            milliseconds = {this.state.milliseconds}
          />
          <ClockControls />
        </TimerContainer>
      </>
    );
  }
}

export default Timer;