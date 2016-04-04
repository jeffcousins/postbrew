import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBrewContent } from '../actions/index';
const { object, func } = React.PropTypes;

const BrewContent = React.createClass({
  propTypes: {
    params: object,
    fetchBrewContent: func,
    brewContent: object
  },
  componentWillMount () {
    console.log('Inside componentWillMount in BrewContent component');
    console.log('this.props is:');
    console.log(this.props);
    this.props.fetchBrewContent(this.props.params.b);
  },
  componentDidMount () {
    console.log('Inside DID MOUNT in BrewContent component');
    console.log('this.props is:');
    console.log(this.props);
  },
  componentDidReceiveProps () {
    console.log('Inside DID RECEIVE PROPS in BrewContent component');
    console.log('this.props is:');
    console.log(this.props);
  },
  render () {
    console.log('Inside render() in BrewContent component');
    console.log('this.props is:');
    console.log(this.props);

    if (!this.props.brewContent) {
      return (
        <div>
          <h2>No results found for {this.props.params.b}</h2>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Title!</h1>
          <hr />
          <h2>Posts:</h2>
          <p>{this.props.brewContent.description}</p>
          <p>TODO: render posts here!</p>
        </div>
      );
    }
  }
});

function mapStateToProps (state) {
  return {
    brewContent: state.brewContent
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchBrewContent }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BrewContent);
