import React from 'react';
import PostList from './PostList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBrewContent } from '../actions/index';
const { object, func, string } = React.PropTypes;

const BrewContent = React.createClass({
  propTypes: {
    params: object,
    fetchBrewContent: func,
    brewContent: object,
    brewpath: string
  },
  componentWillMount () {
/*
    if (this.props.brewpath) {
      this.props.fetchBrewContent(this.props.brewpath);
    } else {
    }
*/
    this.props.fetchBrewContent(this.props.params.b);
  },
  componentWillReceiveProps (nextProps) {
    console.log('Inside componentWillReceiveProps in BrewContent component');
    console.log('this.props is:');
    console.log(this.props);
    console.log('nextProps.brewpath =?? this.props.brewpath:');
    console.log(nextProps.brewpath + ' ??? ' + this.props.brewpath);
    if (nextProps.brewpath !== this.props.brewpath) {
      console.log('inside if statement before fetch?');
      this.props.fetchBrewContent(nextProps.brewpath);
    }
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
          <h1>{this.props.brewContent.title}</h1>
          <p>{this.props.brewContent.description}</p>
          <hr />
          <h2>Posts:</h2>
          <PostList />
        </div>
      );
    }
  }
});

function mapStateToProps (state) {
  return {
    brewContent: state.brewContent,
    brewpath: state.brewContent.pathname
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchBrewContent }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BrewContent);
