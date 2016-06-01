delete process.env.BROWSER;

import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import _ from 'lodash';
import fs from 'fs';
import cors from 'cors';
import logger from 'morgan';
import bodyParser from 'body-parser';
import { brews, users, posts, comments } from './server/routes/routes';
import configStore from './src/store/configStore';
import createRoutes from './src/routes';
import passport from 'passport';

const store = configStore();
const baseTemplate = fs.readFileSync('./index.html');
const template = _.template(baseTemplate);

const app = express();

app.use('/public', express.static('./public'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));
app.use(passport.initialize());
app.use(passport.session());

brews(app);
users(app);
posts(app);
comments(app);

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
  app.use(function (err, req, res, next) {
    res.status(err.status || 500).json('error', {
      message: err.message,
      error: err
    });
  });
}

app.use(function (err, req, res, next) {
  res.status(err.status || 500).json('error', {
    message: err.message,
    error: {}
  });
});

export default app;
