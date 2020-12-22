import React from 'react';
import {
  MDBContainer,
  MDBAnimation,
} from 'mdbreact';
import './HomePage.css';

class HomePage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
        <MDBAnimation type='slideInUp' duration='500ms'>
          <div className='mt-3 mb-5'>
              <MDBContainer>
                  Home Page
              </MDBContainer>
          </div>
        </MDBAnimation>
      </>
    );
  }
}

export default HomePage;