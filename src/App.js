import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBIcon
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

class App extends Component {
  state = {
    collapseID: ''
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  closeCollapse = collID => () => {
    const { collapseID } = this.state;
    window.scrollTo(0, 0);
    collapseID === collID && this.setState({ collapseID: '' });
  };

  render() {
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.toggleCollapse('mainNavbarCollapse')}
      />
    );

    const { collapseID } = this.state;

    return (
      <Router>
        <div className='flyout'>
          <MDBNavbar className="default-color" dark expand='md' fixed='top' scrolling>
            <MDBNavbarBrand className='py-0 font-weight-bold'>
              <strong>React Clock </strong><MDBIcon icon='clock' />
            </MDBNavbarBrand>
            <MDBNavbarToggler
              onClick={this.toggleCollapse('mainNavbarCollapse')}
            />
            <MDBCollapse id='mainNavbarCollapse' isOpen={collapseID} navbar>
              <MDBNavbarNav right>
                
              <MDBNavItem>
                  <MDBNavLink
                    exact
                    to='/'
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                  >
                    <strong>Home</strong>
                  </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to='/stopwatch'
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                  >
                    <strong>Stopwatch</strong>
                  </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    to='/timer'
                  >
                    <strong>Timer</strong>
                  </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    to='/pomodoro'
                  >
                    <strong>Pomodoro</strong>
                  </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    to='/chess'
                  >
                    <strong>Chess</strong>
                  </MDBNavLink>
                </MDBNavItem>

              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>

          {collapseID && overlay}
          <main style={{ marginTop: '4rem' }}>
            <Routes />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
