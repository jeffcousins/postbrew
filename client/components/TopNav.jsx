import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

const { bool, array, func, string } = React.PropTypes;

const TopNav = React.createClass({
  propTypes: {
    isSignedIn: bool,
    username: string,
    topBrews: array,
    fetchTopBrews: func
  },
  componentDidMount () {
    this.props.fetchTopBrews();
  },
  renderCreateBrewButton () {
    if (this.props.isSignedIn) {
      return (
        <Link to='/brews/create' className='item'>
          [ create ]
        </Link>
      );
    }
  },
  renderBrewItems () {
    const brewBarStyle = {
      marginTop: 1,
      marginBottom: 10
    };

    return (
      <div style={brewBarStyle} className='ui small blue secondary inverted menu'>
        {this.renderCreateBrewButton()}
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
        <div className='right menu'>
          <div className='ui item'>
            {this.props.username}
          </div>
          <div className='ui item'>
            <Link to='/signout'> Sign Out</Link>
          </div>
        </div>
      );
    } else {
      return (
        <div className='right menu'>
          <div className='ui vertically fitted item'>
            <div className='ui small buttons'>
              <Link to='/signin' className='ui button'>Sign In</Link>
              <div className='or'></div>
              <Link to='/signup' className='ui positive button'>Sign Up</Link>
            </div>
          </div>
        </div>
      );
    }
  },
  render () {
    const git = {
      width: 20,
      height: 20
    };

    const green = {
      color: '#21BA45'
    };

    if (!this.props.topBrews.length) {
      return <div></div>;
    }

    return (
      <div>
        <div>
          <div className='ui top secondary menu'>
            <div className='left menu'>
              <div className='ui item header'>
                <Link to='/' style={green}>
                  [ postbrew ]
                </Link>
              </div>
              <div className='ui item'>
                <a href='http://github.com/jeffcousins/postbrew' style={git}>
                  <img src='https://postbrew.herokuapp.com/public/GitHub-Mark-32px.png' style={git}/>
                </a>
              </div>
            </div>
            {this.renderAuthButton()}
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
    username: state.auth.username,
    topBrews: state.topBrews
  };
}

export default connect(mapStateToProps, actions)(TopNav);
