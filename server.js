import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import _ from 'lodash';
import fs from 'fs';

const PORT = 8080;
const baseTemplate = fs.readFileSync('./index.html');
const template = _.template(baseTemplate);
import createRoutes from './src/routes';

const app = express();

app.use('/public', express.static('./public'));

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

app.listen(PORT, console.log('listening on port ' + PORT));
