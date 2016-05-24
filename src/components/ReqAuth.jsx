import React from 'react';
import { connect } from 'react-redux';
const { object, bool } = React.PropTypes;

export default function (ComposedComponent) {
  const ReqAuth = React.createClass({
    contextTypes: {
      router: object
    },
    propTypes: {
      isSignedIn: bool
    },
    componentWillMount () {
      if (!this.props.isSignedIn) {
        this.context.router.push('/signin');
      }
    },
    componentWillUpdate (nextProps) {
      if (!nextProps.isSignedIn) {
        this.context.router.push('/signin');
      }
    },
    render () {
      return <ComposedComponent {...this.props} />;
    }
  });

  function mapStateToProps (state) {
    return { isSignedIn: state.auth.isSignedIn };
  }

  return connect(mapStateToProps)(ReqAuth);
}
