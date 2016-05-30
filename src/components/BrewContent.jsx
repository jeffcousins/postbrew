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
    brewpath: string,
    children: React.PropTypes.element
  },
  componentDidMount () {
    this.props.fetchBrewContent(this.props.params.b);
  },
  componentWillReceiveProps (nextProps) {
    if (nextProps.brewpath !== this.props.brewpath) {
      this.props.fetchBrewContent(nextProps.brewpath);
    }
  },
  render () {
    if (!this.props.brewContent.title) {
      return (
        <div>
          <h3>No results found for {this.props.params.b}</h3>
        </div>
      );
    } else {
      return (
        <div className='ui container'>
          <BrewHeader />
          {this.props.children}
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
