import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import FlowsPage from '../FlowsPage/FlowsPage';
import UserPage from '../UserPage/UserPage';
import AddPose from '../AddPose/AddPose';
import Gallery from '../Gallery/Gallery';

import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'});
    this.props.dispatch({type: 'FETCH_FLOWS'});
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route
              exact
              path="/flows"
              component={FlowsPage}
            />

            <ProtectedRoute
              exact
              path="/home"
              component={UserPage}
            />
            
            <ProtectedRoute
              exact
              path="/addPose"
              component={AddPose}
            />
            
            <Route path="/gallery" component={Gallery} />
            
            <Route render={() => <h1>404</h1>} />

          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
