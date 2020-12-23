import React from 'react';
import TimerContainer from '../components/ClockContainer';
import ClockControls from '../components/ClockControls';
import ClockTime from '../components/ClockTime';
import ClockTimeControl from '../components/ClockTimeControl';

class Pomodoro extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  constructor(props) {
    super(props);
    this.state = {
        minutes: 25,
        seconds: 0,
        milliseconds: 0,
        sessionLength: 25,
        breakLength: 5,
        clockActive: false
    };

    this.incrementLength = this.incrementLength.bind(this);
    this.decrementLength = this.decrementLength.bind(this);

  }

  incrementLength(title) {

    if (title === "Session Length") {
      var updatedMinutes = this.state.sessionLength + 1;

      if (updatedMinutes <= 60) {
        this.setState(state=>({
          sessionLength: updatedMinutes,
          minutes: updatedMinutes,
          seconds: 0,
          milliseconds: 0
        }));
      }
    }
    
    else if (title === "Break Length") {
      var updatedMinutes = this.state.breakLength + 1;

      if (updatedMinutes <= 60) {
        this.setState(state=>({
          breakLength: updatedMinutes
        }));
      }
    }
  }

  decrementLength(title) {
    
    if (title === "Session Length") {
      var updatedMinutes = this.state.sessionLength - 1;

      if (updatedMinutes >= 1) {
        this.setState(state=>({
          sessionLength: updatedMinutes,
          minutes: updatedMinutes,
          seconds: 0,
          milliseconds: 0
        }));
      }
    }
    
    else if (title === "Break Length") {
      var updatedMinutes = this.state.breakLength - 1;

      if (updatedMinutes >= 1) {
        this.setState(state=>({
          breakLength: updatedMinutes
        }));
      }
    }
  }

  render() {
    return (
      <>
        <TimerContainer>
          <h1>The <strong>Pomodoro Clock</strong></h1>
          <ClockTimeControl 
            title="Session Length" 
            length={this.state.sessionLength}
            increment = {this.incrementLength}
            decrement = {this.decrementLength}
          />
          <ClockTimeControl 
            title="Break Length" 
            length={this.state.breakLength}
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

export default Pomodoro;