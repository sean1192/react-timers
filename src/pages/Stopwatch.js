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
        clockActive: false,
        intervalID: null
    };

    this.reset = this.reset.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.countdown = this.countdown.bind(this);
  }

  play() {
    if (this.state.clockActive === false) {
      var intervalID = setInterval(this.countdown, 10);
      this.setState(state=>({
        intervalID: intervalID,
        clockActive: true
      }))
    }
  }

  pause() {
    if (this.state.clockActive) {
      clearInterval(this.state.intervalID);
      this.setState(state=>({
        clockActive: false
      }))
    }
  }

  reset() {
    if (this.state.clockActive !== true) {
      this.setState(state=>({
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        clockActive: false,
        intervalID: null
      }))
    }
  }

  countdown() {
    var secs = this.state.seconds;
    var mins = this.state.minutes;
    var msecs = this.state.milliseconds;

    if (msecs === 99) {
      msecs = 0;
      secs ++;
    } else {
      msecs ++;
    }

    if (secs === 59) {
      secs = 0;
      mins ++;
    }

    this.setState(state=>({
      minutes: mins,
      seconds: secs,
      milliseconds: msecs
    }))
  }

  componentWillUnmount() {
    this.pause();
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
            <ClockControls 
              intervalID={this.state.intervalID}
              reset={this.reset}
              play={this.play}
              pause={this.pause}
              align='text-center'
            />
          </div>
        </TimerContainer>
      </>
    );
  }
}

export default Stopwatch;