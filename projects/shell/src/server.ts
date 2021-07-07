import { Engine } from '@nguniversal/common/clover/server';
import * as express from 'express';
import { join } from 'path';
import { format } from 'url';

import { CustomResourceLoader } from '@nguniversal/common/clover/server/src/custom-resource-loader';
import { createFetch } from './create-fetch';

const PORT = 4200;
const HOST = `localhost:${PORT}`;
const DIST = join(__dirname, '../browser');

const app = express();
app.set('views', DIST);

app.get('*.*', express.static(DIST, {
  maxAge: '1y',
  fallthrough: false,
}));

// When using localization enable the below to redirect to a default locale
// app.get(/^(\/|\/favicon\.ico)$/, (req, res) => {
//   res.redirect(301, `/en-US${req.originalUrl}`);
// });

// Without mappings, remotes are loaded via HTTP
const mappings = {
  // MFE1
  'http://localhost:3000/': join(__dirname, '../../mfe1/browser/')
};
CustomResourceLoader.prototype.fetch = createFetch(mappings);

const ssrEngine = new Engine();
app.get('*', (req, res, next) => {
  ssrEngine.render({
    publicPath: DIST,
    url: format({
      protocol: req.protocol,
      host: HOST,
      pathname: req.path,
      query: req.query as Record<string, any>,
    }),
    headers: req.headers,
  })
    .then(html => res.send(html))
    .catch(err => {
      console.error('error', err);
      next(err);
    });
});

app.listen(PORT, () => {
  console.log(`Node Express server listening on http://${HOST}`);
});
