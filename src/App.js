import React from 'react';
import { Switch, Route, NavLink, Link, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Users from './Components/User';
import Contact from './Components/Contact';
import Home from './Components/Home';

function App() {
  return (
    // use NavLink for styling active route
    // use Link for link to the router only
    <Router>
      <div className="App">
        <h2>Welcome to React Router Tutorial</h2>
        <ul>
          <li>
            <NavLink  to='/' exact>Home</NavLink>
          </li>
          <li>
            <NavLink to={{
              pathname : '/users',
              hash: '#submit',
              search : '?quick-submit=true'
            }}>Users</NavLink>
          </li>
          <li>
            <NavLink to={'/contact'}>Contact</NavLink>
          </li>
        </ul>
        <Switch>
          <Route exact path='/' component = {Home} />
          <Route path = '/users' component = {Users} />
          <Route path = '/contact' component = {Contact}/>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
