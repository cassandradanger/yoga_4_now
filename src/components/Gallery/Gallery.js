import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Gallery.css';

class Gallery extends Component {

  componentDidMount () {
    const flowId = Number(this.props.location.search.slice(1,this.props.location.search.length));
    this.props.dispatch({type: 'FETCH_CHOSEN_FLOW', payload: flowId});
  }

  render() {
    return (
      <div>
        {this.props.state.flows[0] ? 
          <ul>{this.props.state.chosenFlow.map((item)=> {
            return <li>
              {item.name} 
              <img className="image" src={item.imageUrl}/>
            </li>
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