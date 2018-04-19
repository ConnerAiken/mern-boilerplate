import React from 'react';
import Styles from './app.scss';

export default class App extends React.Component {
  constructor() {
    super();
    // eslint-disable-next-line
    console.log(`This app is called ${process.env.appName}`);
  }
  render() {
    return (<h1>Hello from React!</h1>);
  }
}