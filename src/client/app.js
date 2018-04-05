import React from 'react';
import ReactDOM from 'react-dom';
import Styles from './app.scss';

class App extends React.Component {
 
  render() {
      return (
         <h1>Hello from React!</h1>
      );
  }
}
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
