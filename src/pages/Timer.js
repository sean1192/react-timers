import React from 'react';
import TimerContainer from '../components/TimerContainer';

class Timer extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
        <TimerContainer title="Timer" />
      </>
    );
  }
}

export default Timer;