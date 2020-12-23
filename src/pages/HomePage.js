import React from 'react';
import './HomePage.css';
import TimerContainer from '../components/ClockContainer';

class HomePage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    
    return (
      <>
        <TimerContainer>
            <div>
                <h1>Welcome to <strong>React Clock</strong></h1>
                <p>A collection of different clock types built with React</p>
            </div>
        </TimerContainer>
      </>
    );
  }
}

export default HomePage;