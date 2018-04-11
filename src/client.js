import React from 'react';
import ReactDOM from 'react-dom';
import RouterWrap from './components/router.jsx';

window.onload = () => {
  ReactDOM.render(<RouterWrap/>, document.getElementById('app'));
};