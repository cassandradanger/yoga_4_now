import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Button.css';

class Button extends Component {
  
  render() {
    return (
      <button onClick={(event) => this.props.chooseFlow(event, this.props.name)} className="mainBtn">{this.props.name}</button>
    );
  }
}
const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(Button);
