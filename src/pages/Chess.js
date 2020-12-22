import React from 'react';
import TimerContainer from '../components/TimerContainer';

class Chess extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
        <TimerContainer title="Chess" />
      </>
    );
  }
}

export default Chess;