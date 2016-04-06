require('babel-register');
require('./server');

// prevent server from trying to load CSS
if (process.env.BROWSER) {
  require('./semantic/dist/semantic.min.css');
}
