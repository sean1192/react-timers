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
        clockActive: false
    };

    this.incrementLength = this.incrementLength.bind(this);
    this.decrementLength = this.decrementLength.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset() {

    if (this.state.clockActive !== true) {
      this.setState(state=>({
        p1minutes: this.state.gameLength,
        p1seconds: 0,
        p1milliseconds: 0,
        p2minutes: this.state.gameLength,
        p2seconds: 0,
        p2milliseconds: 0,
        clockActive: false,
        intervalID: null
      }))
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
              />
            </MDBCol>            

            <MDBCol>
              <h3 className='text-center'>Black</h3>
              <ClockTime 
                minutes = {this.state.p2minutes}
                seconds = {this.state.p2seconds}
                milliseconds = {this.state.p2milliseconds}
              />
            </MDBCol>
          </MDBRow>

          <ClockControls 
            type='switchClock'
            align='text-center'
          />
        </TimerContainer>
      </>
    );
  }
}

export default Chess;