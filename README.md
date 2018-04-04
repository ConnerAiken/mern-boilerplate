# MERN Boilerplate - MongoDB, Express, React, NodeJS

## Status

 [![Build Status](https://travis-ci.org/ConnerAiken/mern-boilerplate.svg?branch=master)](https://travis-ci.org/ConnerAiken/mern-boilerplate)

## Dependencies 

- NodeJS (9+ preferred)
- Docker (CE is fine, 17+ preferred)

## Features

*Full stack javascript, so get the latest version of Node!*

- [X] Webpack 4
- [X] React 
- [X] Express
- [X] Sass
- [X] ES6 - Stage-0+
- [ ] Linting
- [ ] UI/Unit Tests

## Installation

1) `git clone <this_url> && cd <repo_name>`

2) `npm install`

3) Running the application
   - Development Mode (Client only): `npm run dev` then open `http://localhost:8080` in a browser
   - Production Bundle (Client only): `npm run build` then import the client code somewhere
   - Standalone (Client+Server): `npm start` then open `http://localhost:8080` in a browser
   - Dockerized /w MongoDB: `npm run start:docker` - more to come

## Usage

A good place to start would be the .env files. Copy `.env.default` in the root of the project and name the copy `.env`. Replace the values as you see fit. Next, open `docker-compose.yml` and replace the text 'boilerplate' with the app name you put in the env file. After that, you should be in a good place to start customizing it.

## Assumptions

- You have all dependencies installed and are using NPM or Yarn
- This boilerplate was developed using linux mint (Ubuntu 14 - Xenial), it should be cross platform so please report any issues using the github issue tracker.
- If you run the 'npm run updateDeps' script, you will need to have npm-check-updates globally installed: `npm install -g npm-check-updates`   
- Your user account is part of the docker group for sudo access

## Transpiling/Bundling/Polyfills

We currently use babel configured with preset-env, preset-react and preset-stage-0. Eventually the polyfill.io cdn will be primarily used.

## Resources/Sources

### Lifecycle scripts

- npm start
- npm run dev
- npm run upgradeDeps
- npm run build
- npm test

### Credits
[Valentino G](https://www.valentinog.com/blog/webpack-4-tutorial/)

## TODO

- [ ] Add polyfill.io to html-webpack-plugin
- [ ] Add mocha/webdriverio tests
- [ ] Using webpack-merge or lodash for webpack.*env*.js files
- [ ] Add documentation library
- [ ] Setup ESLint
- [ ] Add colors to logging
- [ ] Fix load order (DOM flash)
- [ ] Add deployment command for dockerized mongodb
- [ ] Integrate docker commands into travis?
- [ ] Add webpack bundle analyzer npm script (pipe --stats > stats.json directly into analyzer)
- [ ] Setup provisioning of mongodb
- [ ] Add database connectors