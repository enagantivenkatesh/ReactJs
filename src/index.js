import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
/* Render blank message (Hello World) with react */
// function App() {
//   return React.createElement('div', null, 'Hello World');
// }

/* Using a Class */

// class MyComponent extends React.Component {
//   render() {
//     return <div>
//       <h1>Hello World!</h1>
//       <p>This is my first React Component.</p>
//     </div>
//   }
// }

/* Using a Stateless Functional Component */
const MyComponent = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>This is my first React Component.</p>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<MyComponent />, rootElement);
