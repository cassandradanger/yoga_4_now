import React, { Component } from 'react';
import { connect } from 'react-redux';


class InfoPage extends Component {

  state = {
    flow: 'Headache',
    flowId: 1,
    url: '',
    pose: ''
  }

  chooseFlow = (e) =>{
    console.log("KJHJDH", e.target.value);
    let flowId = this.props.state.flows.filter(item => item.name === e.target.value );
    console.log('test', test[0].id);

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
  }

  render(){
    return(
      <div>
        <label htmlFor="name">Pose Name:</label>
        <input type="text" id="name" onChange={(e) => {this.onChange(e, "pose")}}/>
        <br/>
        <label htmlFor="url">URL:</label>
        <input type="text" id="url"onChange={(e) => {this.onChange(e, "url")}}/>
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
        <button id="submit" onClick={this.submitChange}>Submit</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(InfoPage);