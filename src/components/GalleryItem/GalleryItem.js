import React, { Component } from 'react';
import { connect } from 'react-redux';

import './GalleryItem.css';

class GalleryItem extends Component {

  state={
    index: 0,
  }

  deletePose = () => {
    console.log(this.props.item.id);
    this.props.dispatch({type: 'DELETE_POSE', payload: this.props.item.id});
  }

  render() {
    return (
      <div className="galleryItem">
        {/* <p>{this.props.item.name}</p> */}
        <img className="image" src={this.props.item.imageUrl}/>
        <p>{this.props.item.pose_name}</p>
        {this.props.state.user.admin && 
          <>
          <button onClick={this.deletePose}>delete this pose</button>
          <button>edit</button>
          </>
        }
      </div>
    )
  }
}


const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(GalleryItem);