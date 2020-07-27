import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Gallery.css';

class Gallery extends Component {


  render() {
    return (
      <div>
        {this.props.state.flows[0] ? 
          <ul>{this.props.state.flows.map((item)=> {
             return <li>{item.name}</li>
          })}</ul>
          :
          <p></p>
        }
      </div>
    )
  }
}


const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(Gallery);