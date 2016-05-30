import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
const { object, string, bool } = React.PropTypes;

// TODO: may only be a functional component
// instead of mapping redux state to props, pass them in from
// BrewContent component

const BrewHeader = React.createClass({
  propTypes: {
    brewContent: object,
    brewPath: string,
    isSignedIn: bool
  },
  renderSubmitPostButton () {
    if (this.props.isSignedIn) {
      return (
        <Link to={`/b/${this.props.brewContent.brew_name}/submit`}>
          <button className='tiny ui compact black button'>
            + Submit a post
          </button>
        </Link>
      );
    } else {
      return (
        <Link to={`/signin`}>
          <button className='mini ui compact button'>
            Sign in to submit a post
          </button>
        </Link>
      );
    }
  },
  render () {
    const { title, description, brew_name, username } = this.props.brewContent;

    return (
      <div className='ui tall stacked segment'>
        <span className='ui header'>{title}</span>
        <p>[ <Link to={`/b/${brew_name}`}>/b/{brew_name}</Link> ] - {description}</p>
        {this.renderSubmitPostButton()}
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    brewContent: state.brewContent,
    brewPath: state.brewContent.pathname,
    isSignedIn: state.auth.isSignedIn
  };
}

export default connect(mapStateToProps)(BrewHeader);
