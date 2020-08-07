import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

const Nav = (props) => (
  <div className="nav">
    <Link to="/home">
      <h2 className="nav-title">Prime Solo Project</h2>
    </Link>
    <div className="nav-right">
      <Link className="nav-link" to="/home">
        {props.user.id ? 'Home' : 'Login / Register'}
      </Link>
      <Link className="nav-link" to="/flows">
        Flows
      </Link>
      {props.user.id && props.user.admin && (
        <Link className="nav-link" to="/addPose">
          Add Pose
        </Link>
      )}
      {props.user.id && (
        <LogOutButton className="nav-link"/>
      )}
    </div>
  </div>
);

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
