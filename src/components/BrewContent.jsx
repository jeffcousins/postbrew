import React from 'react';
import BrewHeader from './BrewHeader';
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
  componentDidMount () {
    this.props.fetchBrewContent(this.props.params.b);
  },
  componentWillReceiveProps (nextProps) {
    if (nextProps.brewpath !== this.props.brewpath) {
      console.log('inside if statement before fetch?');
      this.props.fetchBrewContent(nextProps.brewpath);
    }
  },
  render () {
    console.log('inside BrewContent render function');
    console.log('this.props is:');
    console.log(this.props);
    if (!this.props.brewContent.title) {
      return (
        <div>
          <h3>No results found for {this.props.params.b}</h3>
        </div>
      );
    } else {
      return (
        <div>
          <BrewHeader />
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
