import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
const { bool } = React.PropTypes;

const $ = require('jquery');

const brewBarStyle = {
  marginTop: '1',
  marginBottom: '10'
};

const TopNav = React.createClass({
  propTypes: {
    isSignedIn: bool
  },
  componentDidMount () {
    if (process.env.BROWSER) {
      $('.ui.menu')
        .on('click', '.item', function () {
          $(this)
            .addClass('active')
            .siblings('.item')
            .removeClass('active');
        });
    }
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
    return (
      <div>
        <div>
          <div className='ui top menu'>
            <div className='left brown menu'>
              <Link to='/' className='ui green inverted item header'>
                [ postbrew ]
              </Link>
            </div>

            <div className='right menu'>
              {this.renderAuthButton()}
            </div>
          </div>
        </div>
        <div style={brewBarStyle} className='ui small blue secondary inverted menu'>
          <Link to='/b/javascript' className='active item'>
            javascript
          </Link>
          <Link to='/b/es6' className='item'>
            es6
          </Link>
          <Link to='/b/react' className='item'>
            react
          </Link>
          <Link to='/b/redux' className='item'>
            redux
          </Link>
          <Link to='/b/node' className='item'>
            node
          </Link>
          <Link to='/b/express' className='item'>
            express
          </Link>
          <Link to='/b/postgresql' className='item'>
            postgresql
          </Link>
          <Link to='/b/sequelize' className='item'>
            sequelize
          </Link>
          <Link to='/b/webpack' className='item'>
            webpack
          </Link>
          <Link to='/b/mocha' className='item'>
            mocha
          </Link>
          <Link to='/b/babel' className='item'>
            babel
          </Link>
          <Link to='/b/semanticui' className='item'>
            semantic ui
          </Link>
          <Link to='/brews/create' className='item'>
            [ create ]
          </Link>
        </div>
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    isSignedIn: state.auth.isSignedIn
  };
}

export default connect(mapStateToProps)(TopNav);
