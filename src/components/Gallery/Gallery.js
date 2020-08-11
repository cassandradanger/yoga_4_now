import React, { Component } from 'react';
import { connect } from 'react-redux';
import GalleryItem from '../GalleryItem/GalleryItem';

import './Gallery.css';

class Gallery extends Component {

  state={
    index: 0,
  }
  componentDidMount () {
    const flowId = Number(this.props.location.search.slice(1,this.props.location.search.length));
    this.props.dispatch({type: 'FETCH_CHOSEN_FLOW', payload: flowId});
  }

  onClick = (e, direction) => {
    if(direction === "back"){
      if(this.state.index === 0 ){
        this.setState({
          index: this.props.state.chosenFlow.length-1
        })
      } else {
        this.setState({
          index: this.state.index - 1
        })
      }
    }

    if(direction === "forward"){
        if(this.state.index === this.props.state.chosenFlow.length-1){
        this.setState({
          index: 0
        })
      } else {
        this.setState({
          index: this.state.index + 1
        })
      }
    }
  }

  render() {
    return (
      <div>
        {this.props.state.chosenFlow[0] ? 
          <div className="galleryWrapper">
            <button className="directionButton" onClick={(e) => {this.onClick(e, 'back')}}> - </button>
            <GalleryItem item={this.props.state.chosenFlow[this.state.index]}></GalleryItem>
            <button className="directionButton" onClick={(e) => {this.onClick(e, 'forward')}}> + </button>
          </div>
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