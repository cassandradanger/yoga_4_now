import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../Button/Button';

class AboutPage extends Component {

  componentDidMount () {
    this.props.dispatch({type: 'FETCH_FLOWS'});
  }

  chooseFlow = (event, flowName) => {
    console.log(flowName);
    this.props.dispatch({type: 'FETCH_CHOSEN_FLOW', payload: flowName});
    this.props.history.push('/gallery')

  }
  render() {
    return (
      <div>
        <div>
          <p>
            Choose Your Flow
          </p>
          <div className="buttonWrapper">
            {this.props.state.flows.map((flow) => {
              return <Button chooseFlow={this.chooseFlow} key={flow.id} name={flow.name}></Button>
            })}
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(AboutPage);