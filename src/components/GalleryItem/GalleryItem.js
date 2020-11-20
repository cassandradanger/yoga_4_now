import React, { Component } from 'react';
import { connect } from 'react-redux';

import './GalleryItem.css';

class GalleryItem extends Component {

  state={
    index: 0,
  }

  render() {
    return (
      <div className="galleryItem">
        <img className="image" src={this.props.item.imageUrl}/>
        <p>{this.props.item.pose_name}</p>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(GalleryItem);