import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Import pages
import HomePage from './pages/HomePage';
import Stopwatch from './pages/Stopwatch';
import Pomodoro from './pages/Pomodoro';
import Chess from './pages/Chess';
import Timer from './pages/Timer';


// Define the routes
class Routes extends React.Component {
    render() {
        return (
        <Switch>

            <Route exact path='/' component={HomePage} />
            <Route exact path='/Stopwatch' component={Stopwatch} />
            <Route exact path='/Pomodoro' component={Pomodoro} />
            <Route exact path='/Chess' component={Chess} />
            <Route exact path='/Timer' component={Timer} />
            
            <Route
            render={function() {
                return <h1>Not Found</h1>;
            }}
            />
        </Switch>
        );
    }
}
  
export default Routes;