import React from 'react';
import './HomePage.css';
import TimerContainer from '../components/TimerContainer';

class HomePage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
        <TimerContainer title="Home Page" />
      </>
    );
  }
}

export default HomePage;