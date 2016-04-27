import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
const { object, string } = React.PropTypes;

// TODO: may only be a functional component
// instead of mapping redux state to props, pass them in from
// BrewContent component

const BrewHeader = React.createClass({
  propTypes: {
    brewContent: object,
    brewPath: string
  },
  render () {
    const { title, description, url, founder } = this.props.brewContent;

    return (
      <div>
        <h1>{title}</h1>
        <Link to={url}>{url}</Link>
        <p>Brew created by: <Link to={`/u/${founder}`}>{founder}</Link></p>
        <p>{description}</p>
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    brewContent: state.brewContent,
    brewPath: state.brewContent.pathname
  };
}

export default connect(mapStateToProps)(BrewHeader);
