# MERN Boilerplate - MongoDB, Express, React, NodeJS
 
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
   - Standalone (Client+Server): `npm start` then open `http://localhost` in a browser

## Assumptions

- You have all dependencies installed and are using NPM or Yarn
- This boilerplate was developed using linux mint (Ubuntu 14 - Xenial), it should be cross platform so please report any issues using the github issue tracker.
- If you run the 'npm run updateDeps' script, you will need to have npm-check-updates globally installed: `npm install -g npm-check-updates`   

## Resources/Sources

### Lifecycle scripts

- npm start
- npm run dev
- npm run upgradeDeps
- npm run build
- npm test

### Origin
Some of this work came from Valentino G's blog: https://www.valentinog.com/blog/webpack-4-tutorial/ 

## TODO

- [ ] Add mocha/webdriverio tests
- [ ] Using webpack-merge or lodash for webpack.*env*.js files
- [ ] Add documentation library
- [ ] Setup ESLint
- [ ] Add colors to logging
- [ ] Fix load order (DOM flash)
- [ ] Add deployment command for dockerized mongodb
- [ ] Dockerize the boilerplate
- [ ] Use docker-swarm/docker-compose to run the docker containers together
- [ ] Add webpack bundle analyzer npm script (pipe --stats > stats.json directly into analyzer)