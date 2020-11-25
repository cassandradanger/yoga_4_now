import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageUpload from '../ImageUpload/ImageUpload';



class AddPose extends Component {

  state = {
    flow: 'Headache',
    flowId: 1,
    url: '',
    pose: ''
  }

  componentDidMount () {
    this.props.dispatch({type: 'FETCH_FLOWS'});
  }

  chooseFlow = (e) =>{
    console.log("KJHJDH", e.target.value);
    let flowId = this.props.state.flows.filter(item => item.name === e.target.value );

    this.setState({
      flow: e.target.value,
      flowId: flowId[0].id
    })
  }

  onChange = (e, type) => {
    console.log(e.target.value, type);
    this.setState({
      [type]: e.target.value
    })
  }

  submitChange = () => {
    console.log("YO", this.state);
    this.props.dispatch({type: 'ADD_POSE', payload: this.state, history: this.props.history, id: this.state.flowId});
  }

  addNewImage = (imageURL) => {
    console.log(imageURL);
    this.setState({
      url: imageURL
    })
  }
  render(){
    return(
      <div>
        <label htmlFor="name">Pose Name:</label>
        <input type="text" id="name" onChange={(e) => {this.onChange(e, "pose")}}/>
        <br/>
        <label htmlFor="flow">Flow:</label>
        <select id="flow"onChange={(e) => {this.chooseFlow(e)}}>
          {this.props.state.flows && 
            <>
              {this.props.state.flows.map((item)=> {
                return <option key={item.id} id={item.id}>{item.name}</option>
              })}
            </>
          }
        </select>
        <br/>
        <label htmlFor="url">Image:</label>
        {/* <input type="text" id="url"onChange={(e) => {this.onChange(e, "url")}}/> */}
        <ImageUpload addNewImage={this.addNewImage}/>
        <br/>
        <button id="submit" onClick={this.submitChange}>Submit</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(AddPose);