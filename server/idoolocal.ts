// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { json, urlencoded } from 'body-parser';
import * as compression from 'compression';
import * as favicon from 'serve-favicon';

import { renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';

import * as express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';
import exampleRouter = require('./Routes/exampleRoute');

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
// const app = express();
const app: express.Application = express();
app.disable('x-powered-by');

app.use(json());
app.use(compression());
app.use(urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});


const PORT = process.env.PORT || 4000;
const BUILD_FOLDER = join(process.cwd(), 'build');

app.use(favicon(join(BUILD_FOLDER, 'client', 'favicon.ico')))

// Our index.html we'll use as our template
const template = readFileSync(join(BUILD_FOLDER, 'client', 'index.html')).toString();

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require(join(BUILD_FOLDER, 'client-ssr', 'main.bundle'));

const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

app.engine('html', (_, options, callback) => {
  renderModuleFactory(AppServerModuleNgFactory, {
    // Our index.html
    document: template,
    url: options.req.url,
    // DI so that we can get lazy-loading to work differently (since we need it to just instantly render it)
    extraProviders: [
      provideModuleMap(LAZY_MODULE_MAP)
    ]
  }).then(html => {
    callback(null, html);
  });
});

app.set('view engine', 'html');
app.set('views', join(BUILD_FOLDER, 'client'));

// Server static files from /browser
app.get('*.*', express.static(join(BUILD_FOLDER, 'client')));

app.use('/example', exampleRouter);

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render(join(BUILD_FOLDER, 'client', 'index.html'), { req });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});