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

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
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
              path="/about"
              component={AboutPage}
            />

            <ProtectedRoute
              exact
              path="/home"
              component={UserPage}
            />
            
            <ProtectedRoute
              exact
              path="/info"
              component={InfoPage}
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
