import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
const { object, string, bool } = React.PropTypes;

const BrewHeader = React.createClass({
  propTypes: {
    brewContent: object,
    brewPath: string,
    isSignedIn: bool
  },
  renderSubmitPostButton (brewName) {
    if (this.props.brewContent.title === '[ postbrew ]') {
      return;
    }

    if (!brewName) {
      return;
    }

    if (this.props.isSignedIn) {
      return (
        <Link to={`/b/${this.props.brewContent.brew_name}/submit`}>
          <button className='mini ui compact green button'>
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
  renderBrewLink (brewName) {
    if (brewName) {
      return (
        <span>[ <Link to={`/b/${brewName}`}>/b/{brewName}</Link> ] - </span>
      );
    }
  },
  renderCreatedBy (username) {
    if (username) {
      return (
        <span> - <em> Created by <Link to={`/u/${username}`}>
          {username}</Link>.</em>
        </span>
      );
    }
  },
  render () {
    const { title, description, brew_name, username } = this.props.brewContent;

    return (
      <div className='ui tall stacked segment'>
        <span className='ui large header'>{title}</span>
        <p>
          {this.renderBrewLink(brew_name)}
          {description}
          {this.renderCreatedBy(username)}
        </p>
        {this.renderSubmitPostButton(brew_name)}
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
