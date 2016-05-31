import React from 'react';
import BrewHeader from './BrewHeader';
import PostList from './PostList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBrewContent, fetchAllContent } from '../actions/index';

const { object, func, string } = React.PropTypes;

const BrewContent = React.createClass({
  propTypes: {
    params: object,
    fetchBrewContent: func,
    fetchAllContent: func,
    brewContent: object,
    brewpath: string,
    children: React.PropTypes.element
  },
  componentDidMount () {
    if (!this.props.brewContent.posts) {
      if (this.props.brewContent.pathname === '/') {
        this.props.fetchAllContent();
      } else {
        this.props.fetchBrewContent(this.props.brewContent.pathname);
      }
    }
  },
  componentWillReceiveProps (nextProps) {
    if (nextProps.brewContent.pathname !== this.props.brewContent.pathname) {
      if (nextProps.brewContent.pathname === '/') {
        this.props.fetchAllContent();
      } else {
        this.props.fetchBrewContent(nextProps.brewContent.pathname);
      }
    }
  },
  render () {
    if (this.props.brewContent.pathname === '/') {
      return (
        <div className='ui container'>
          <BrewHeader />
          <PostList />
        </div>
      )
    } else if (!this.props.brewContent.title) {
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
  return bindActionCreators({ fetchBrewContent, fetchAllContent }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BrewContent);
