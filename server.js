delete process.env.BROWSER;

import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import _ from 'lodash';
import fs from 'fs';
import logger from 'morgan';
import bodyParser from 'body-parser';
import { brews, users } from './server/routes/routes';
import configStore from './src/store/configStore';
const store = configStore();

// require('./database.js');

const baseTemplate = fs.readFileSync('./index.html');
const template = _.template(baseTemplate);
import createRoutes from './src/routes';

const app = express();

app.use('/public', express.static('./public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));

brews(app);
//users(app);

app.use((req, res) => {
  match({ routes: createRoutes(), location: req.url },
    (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        const body = renderToString(
          React.createElement(Provider, {store},
            React.createElement(RouterContext, renderProps)
          )
        );
        res.status(200).send(template({body}));
      } else {
        res.status(404).send('Not Found');
      }
  });
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

export default app;
