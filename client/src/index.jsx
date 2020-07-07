import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from './components/App.jsx';
import MyEntries from './components/MyEntries.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Forums from './components/Forums.jsx';

const routing = (
  <Router>
  <div>
    <ul id="menu">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/myentries">My Entries</Link>
      </li>
      <li>
        <Link to="/forums">Forums</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </ul>
    <Route exact path="/" component={App} />
    <Route exact path="/myentries" component={MyEntries} />
    <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/forums" component={Forums} />

  </div>
</Router>
)

ReactDOM.render(routing, document.getElementById('app'));