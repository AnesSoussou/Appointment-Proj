import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Feed from './pages/Feed';
import Navbar from './Navbar';
import PrivateRoute from './PrivateRoute';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/feed" component={Feed} />

      </Switch>

    </Router >
  );
}

export default App;
