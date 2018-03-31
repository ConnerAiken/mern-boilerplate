# React, NodeJS 9 and Webpack 4 - boilerplate

## Features

- [X] Webpack 4
- [X] React
- [ ] NodeJS
- [ ] Express
- [X] Sass
- [ ] UI/Unit Tests

## TODO

- [ ] Fix sass-loader
- [ ] Add mocha tests
- [ ] Build out server example
- [ ] Add .env file support (including .env variables in SASS, see sass-loader github)
- [ ] Add logging class
- [ ] Add polyfills (including fetch and css-grid)
- [ ] Using webpack-merge or lodash for webpack.*env*.js files
- [ ] Add documentation library/npm scripts
- [ ] Setup ES-Lint 

## Assumptions

- This boilerplate was developed using linux mint (Ubuntu 14 - Xenial), it should be cross platform so please report any issues using the github issue tracker.
- If you run the 'npm run updateDeps' script, you will need to have npm-check-updates globally installed: `npm install -g npm-check-updates`

## ES6 Support

This supports all the standard babel-env ES6 features as well as the experiment ES6 feature such as object-spread.

## Installation

1) `git clone <this_url> && cd <repo_name>`

2) `npm install`

3) Running the application
   - Development Mode: `npm run dev` then open `http://localhost:8080` in a browser
   - Production Bundle: `npm run build` then import the client code somewhere
   - Production Standalone: `npm start` then open `http://localhost` in a browser

## Resources/Sources

Some of this work came from Valentino G's blog: https://www.valentinog.com/blog/webpack-4-tutorial/ 