import React from 'react';
import { Link } from 'react-router';
const $ = require('jquery');

const styles = {};

const TopNav = React.createClass({
  componentWillMount () {
    if (process.env.BROWSER) {
      $('.ui.menu')
        .on('click', '.item', function() {
          $(this)
            .addClass('active')
            .siblings('.item')
            .removeClass('active');
        });
    }
  },
  render () {
    return (
      <div>
        <div style={{marginTop: '49'}} className="ui small blue secondary inverted menu">
          <Link to='/b/javascript' className="active item">
            javascript
          </Link>
          <Link to='/b/es6' className="item">
            es6
          </Link>
          <Link to='/b/react' className="item">
            react
          </Link>
          <Link to='/b/redux' className="item">
            redux
          </Link>
          <Link to='/b/node' className="item">
            node
          </Link>
          <Link to='/b/express' className="item">
            express
          </Link>
          <Link to='/b/mongodb' className="item">
            mongodb
          </Link>
          <Link to='/b/mongoose' className="item">
            mongoose
          </Link>
          <Link to='/b/webpack' className="item">
            webpack
          </Link>
          <Link to='/b/mocha' className="item">
            mocha
          </Link>
          <Link to='/b/babel' className="item">
            babel
          </Link>
          <Link to='/b/semanticui' className="item">
            semantic ui
          </Link>
        </div>
        <div>
          <div className="ui top fixed menu">
            <div className="left menu">
              <div className="vertically fitted item">
                <img src="http://static1.squarespace.com/static/5596a865e4b01a6af589a2cb/t/55b3956de4b00b13a952dadc/1437832557884/coffeepic.png" alt="postbrew"/>
              </div>
              <a className="brown item">About</a>
              <a className="brown item">GitHub</a>
            </div>
            <div className="right menu">
              <div className="brown item">
                <div className="ui input tiny">
                  <input type='text' placeholder='Search' />
                </div>
              </div>
              <div className="vertically fitted item">
                <div className="ui small buttons">
                  <button className="ui button">Sign In</button>
                  <div className="or"></div>
                  <button className="ui positive button">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default TopNav;
