import React from 'react';
import TimerContainer from '../components/TimerContainer';

class Stopwatch extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
        <TimerContainer title="Stopwatch" />
      </>
    );
  }
}

export default Stopwatch;