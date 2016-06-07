import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

const { bool, array, func } = React.PropTypes;

const TopNav = React.createClass({
  propTypes: {
    isSignedIn: bool,
    topBrews: array,
    fetchTopBrews: func
  },
  componentDidMount () {
    this.props.fetchTopBrews();
  },
  renderBrewItems () {
    const brewBarStyle = {
      marginTop: 1,
      marginBottom: 10
    };

    return (
      <div style={brewBarStyle} className='ui small blue secondary inverted menu brewmenu'>
        <Link to='/brews/create' className='item'>
          [ create ]
        </Link>
        {this.props.topBrews.map((brew) => {
          return (
            <Link key={brew} to={`/b/${brew}`} className='item'>
              {brew}
            </Link>
          );
        })}
      </div>
    );
  },
  renderAuthButton () {
    if (this.props.isSignedIn) {
      return (
        <div className='brown item'>
          <Link to='/signout' className='ui button'>Sign Out</Link>
        </div>
      );
    } else {
      return (
        <div className='vertically fitted item'>
          <div className='ui small buttons'>
            <Link to='/signin' className='ui button'>Sign In</Link>
            <div className='or'></div>
            <Link to='/signup' className='ui positive button'>Sign Up</Link>
          </div>
        </div>
      );
    }
  },
  render () {
    if (!this.props.topBrews.length) {
      return <div></div>;
    }

    return (
      <div>
        <div>
          <div className='ui top menu'>
            <div className='left menu'>
              <Link to='/' className='ui green inverted item header'>
                [ postbrew ]
              </Link>
            </div>

            <div className='right menu'>
              {this.renderAuthButton()}
            </div>
          </div>
        </div>
        {this.renderBrewItems()}
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    isSignedIn: state.auth.isSignedIn,
    topBrews: state.topBrews
  };
}

export default connect(mapStateToProps, actions)(TopNav);
