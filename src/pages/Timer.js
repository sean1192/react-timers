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
        clockActive: false,
        intervalID: null
    };

    this.incrementLength = this.incrementLength.bind(this);
    this.decrementLength = this.decrementLength.bind(this);
    this.reset = this.reset.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.countdown = this.countdown.bind(this);
  }

  reset() {
    if (this.state.clockActive !== true) {
      this.setState(state=>({
        minutes: this.state.timerLength,
        seconds: 0,
        milliseconds: 0,
        clockActive: false,
        intervalID: null
      }))
    }
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

  countdown() {
    var secs = this.state.seconds;
    var mins = this.state.minutes;
    var msecs = this.state.milliseconds;

    console.log(mins, secs, msecs);

    // Stop time at 0
    if(msecs === 0 && secs === 0 && mins === 0) {
      this.pause();
      this.alarmSound.play();
    } else {
      if (msecs === 0) {
        if (secs > 0) {
          msecs = 99;
          secs --;
        } else if (mins > 0) {
          msecs = 99;
        }
      } else {
        msecs --;
      }
  
      if (secs === 0) {
        if (mins > 0) {
          secs = 59;
          mins --;
        }
      }
  
      this.setState(state=>({
        minutes: mins,
        seconds: secs,
        milliseconds: msecs
      }))
    }
  }

  incrementLength() {
    var updatedMinutes = this.state.timerLength + 1;

    if (updatedMinutes <= 60 && !this.state.clockActive) {
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

    if (updatedMinutes >= 1 && !this.state.clockActive) {
      this.setState(state=>({
        timerLength: updatedMinutes,
        minutes: updatedMinutes,
        seconds: 0,
        milliseconds: 0
      }));
    }
  }

  componentWillUnmount() {
    this.pause();
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
            redText = {true}
          />
          <ClockControls 
            align='text-center'
            reset={this.reset}
            play={this.play}
            pause={this.pause}
          />
        </TimerContainer>
        <audio
            id="alarmSound"
            preload="auto"
            ref={(audio) => {
                this.alarmSound = audio;
            }}
            src="http://soundbible.com/grab.php?id=2062&type=wav"
        />
      </>
    );
  }
}

export default Timer;