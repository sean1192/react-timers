import React from 'react';
import TimerContainer from '../components/ClockContainer';
import ClockTime from '../components/ClockTime';
import ClockControls from '../components/ClockControls';
import ClockTimeControl from '../components/ClockTimeControl';
import {
  MDBRow,
  MDBCol
} from 'mdbreact';

class Chess extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  constructor(props) {
    super(props);
    this.state = {
        p1minutes: 10,
        p1seconds: 0,
        p1milliseconds: 0,
        p2minutes: 10,
        p2seconds: 0,
        p2milliseconds: 0,
        gameLength: 10,
        clockActive: false,
        p1Active: false,
        p1intervalID: null,
        p2intervalID: null
    };

    this.incrementLength = this.incrementLength.bind(this);
    this.decrementLength = this.decrementLength.bind(this);
    this.reset = this.reset.bind(this);
    this.pause = this.pause.bind(this);
    this.switchClock = this.switchClock.bind(this);
    this.countdown = this.countdown.bind(this);
  }

  componentWillUnmount() {
    this.reset();
  }

  reset() {
    this.setState(state=>({
      p1minutes: this.state.gameLength,
      p1seconds: 0,
      p1milliseconds: 0,
      p2minutes: this.state.gameLength,
      p2seconds: 0,
      p2milliseconds: 0,
      clockActive: false,
      p1Active: false,
      p1intervalID: null,
      p2intervalID: null
    }))
    clearInterval(this.state.p1intervalID);
    clearInterval(this.state.p2intervalID);
  }

  pause() {
    if (this.state.clockActive) {
      clearInterval(this.state.p1intervalID);
      clearInterval(this.state.p2intervalID);
      this.setState(state=>({
        clockActive: false
      }))
    }
  }

  switchClock() {
    if (this.state.p1Active === false) {
      var intervalID = setInterval(this.countdown, 10, '1');
      this.setState(state=>({
        p1intervalID: intervalID,
        clockActive: true,
        p1Active: true
      }))

      if (this.state.p2intervalID !== null) {
        clearInterval(this.state.p2intervalID);
      }

    } else {
      intervalID = setInterval(this.countdown, 10, '2');
      this.setState(state=>({
        p2intervalID: intervalID,
        clockActive: true,
        p1Active: false
      }))

      if (this.state.p1intervalID !== null) {
        clearInterval(this.state.p1intervalID);
      }
    }
  }

  countdown(player) {
    
    if (player === '1') {
      var secs = this.state.p1seconds;
      var mins = this.state.p1minutes;
      var msecs = this.state.p1milliseconds;
    } else if (player === '2') {
      secs = this.state.p2seconds;
      mins = this.state.p2minutes;
      msecs = this.state.p2milliseconds;
    }

    // Stop time at 0
    if(msecs === 0 && secs === 0 && mins === 0) {
      this.pause();
      this.alarmSound.play();
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

      if (player === '1') {
        this.setState(state=>({
          p1minutes: mins,
          p1seconds: secs,
          p1milliseconds: msecs
        }))
      } else if (player === '2') {
        this.setState(state=>({
          p2minutes: mins,
          p2seconds: secs,
          p2milliseconds: msecs
        }))
      }
    }
  }

  incrementLength() {
    var updatedMinutes = this.state.gameLength + 1;

    if (updatedMinutes <= 60 && !this.state.clockActive) {
      this.setState(state=>({
        gameLength: updatedMinutes,
        p1minutes: updatedMinutes,
        p1seconds: 0,
        p1milliseconds: 0,
        p2minutes: updatedMinutes,
        p2seconds: 0,
        p2milliseconds: 0
      }));
    }
  }

  decrementLength() {
    var updatedMinutes = this.state.gameLength - 1;

    if (updatedMinutes >= 1 && !this.state.clockActive) {
      this.setState(state=>({
        gameLength: updatedMinutes,
        p1minutes: updatedMinutes,
        p1seconds: 0,
        p1milliseconds: 0,
        p2minutes: updatedMinutes,
        p2seconds: 0,
        p2milliseconds: 0
      }));
    }
  }

  render() {
    return (
      <>
        <TimerContainer>
          <h1>The <strong>Chess Clock</strong></h1>
          <ClockTimeControl 
            length={this.state.gameLength}
            increment = {this.incrementLength}
            decrement = {this.decrementLength}
          />
          <ClockControls 
            type='resetOnly' 
            align='text-left'
            reset={this.reset}
          />
          <MDBRow>
            <MDBCol>
              <h3 className='text-center'>White</h3>
              <ClockTime 
                minutes = {this.state.p1minutes}
                seconds = {this.state.p1seconds}
                milliseconds = {this.state.p1milliseconds}
                redText = {true}
              />
            </MDBCol>            

            <MDBCol>
              <h3 className='text-center'>Black</h3>
              <ClockTime 
                minutes = {this.state.p2minutes}
                seconds = {this.state.p2seconds}
                milliseconds = {this.state.p2milliseconds}
                redText = {true}
              />
            </MDBCol>
          </MDBRow>

          <ClockControls 
            type='switchClock'
            align='text-center'
            switchClock={this.switchClock}
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

export default Chess;