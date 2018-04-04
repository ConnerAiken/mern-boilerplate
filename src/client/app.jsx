// Node.JS
import React from "react";
import ReactDOM from "react-dom";
  
const App = () => {
  return (
    <div>
      <p>React reporting in!</p>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));


module.hot.accept();