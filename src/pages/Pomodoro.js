import React from 'react';
import TimerContainer from '../components/TimerContainer';

class Pomodoro extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
        <TimerContainer title="Pomodoro" />
      </>
    );
  }
}

export default Pomodoro;