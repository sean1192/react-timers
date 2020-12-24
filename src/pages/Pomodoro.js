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
        minutes: 1,
        seconds: 0,
        milliseconds: 0,
        sessionLength: 1,
        breakLength: 5,
        clockActive: false,
        clockType: 'Session',
        intervalID: null
    };

    this.incrementLength = this.incrementLength.bind(this);
    this.decrementLength = this.decrementLength.bind(this);
    this.reset = this.reset.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.countdown = this.countdown.bind(this);
    this.changeTimer = this.changeTimer.bind(this);
  }

  reset() {

    if (this.state.clockActive !== true) {
      this.setState(state=>({
        minutes: this.state.sessionLength,
        seconds: 0,
        milliseconds: 0,
        clockType: 'Session',
        clockActive: false,
        intervalID: null
      }))
    }
  }

  play() {
    if (this.state.clockActive === false) {
      var intervalID = setInterval(this.countdown, 1);
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

    // Stop time at 0
    if(msecs === 0 && secs === 0 && mins === 0) {
      this.pause();
      this.alarmSound.play();
      this.changeTimer();
      this.play();
    } else {

      // Otherwise update each time variable
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

  incrementLength(title) {

    if (title === "Session Length") {
      var updatedMinutes = this.state.sessionLength + 1;

      if (updatedMinutes <= 60 && !this.state.clockActive) {
        this.setState(state=>({
          sessionLength: updatedMinutes,
          minutes: updatedMinutes,
          seconds: 0,
          milliseconds: 0
        }));
      }
    }
    
    else if (title === "Break Length" && !this.state.clockActive) {
      updatedMinutes = this.state.breakLength + 1;

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

      if (updatedMinutes >= 1 && !this.state.clockActive) {
        this.setState(state=>({
          sessionLength: updatedMinutes,
          minutes: updatedMinutes,
          seconds: 0,
          milliseconds: 0
        }));
      }
    }
    
    else if (title === "Break Length") {
      updatedMinutes = this.state.breakLength - 1;

      if (updatedMinutes >= 1 && !this.state.clockActive) {
        this.setState(state=>({
          breakLength: updatedMinutes
        }));
      }
    }
  }

  changeTimer() {
    if (this.state.clockType === 'Session') {
      this.setState(state=>({
        minutes: this.state.breakLength,
        seconds: 0,
        milliseconds: 0,
        clockType: 'Break'
      }))
    } else if (this.state.clockType === 'Break') {
      this.setState(state=>({
        minutes: this.state.sessionLength,
        seconds: 0,
        milliseconds: 0,
        clockType: 'Session'
      }))
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
          <div className='text-center'>{this.state.clockType}</div>
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

export default Pomodoro;