// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// // ---- javascript expression in jsx ----
// import React from "react";
// import ReactDOM from "react-dom";

// const fName = "Azrin";
// const lName = "Saedi";
// const num = 21;
// ReactDOM.render(
//   <div>
//     <h1>
//       Hello {fName} {lName}!
//     </h1>
//     <p> Your lucky number is {num}</p>
//   </div>,
//   document.getElementById("root")
// );

// // ---- inline styling in jsx ----
// import React from "react";
// import ReactDOM from "react-dom";

// const customStyle = {
//   color: "red",
//   fontSize: "20px",
//   border: "1px solid black"
// };

// customStyle.color = "blue";

// ReactDOM.render(
//   <h1 style={customStyle}>Hello World!</h1>,
//   document.getElementById("root")
// );



//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

// // ---- react styling practice ----
// import React from "react";
// import ReactDOM from "react-dom";

// const hour = new Date().getHours();
// var customStyle = {};
// var greeting;
// if (hour >= 0 && hour < 12) {
//   greeting = "Morning";
//   customStyle.color = "red";
// } else if (hour >= 12 && hour < 18) {
//   greeting = "Afternoon";
//   customStyle.color = "green";
// } else if (hour >= 18 && hour < 24) {
//   greeting = "Night";
//   customStyle.color = "blue";
// }
// ReactDOM.render(
//   <h1 className="heading" style={customStyle}>
//     Good {greeting}
//   </h1>,
//   document.getElementById("root")
// );

// // ---- react components ----
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App.jsx";

// ReactDOM.render(<App />, document.getElementById("root"));

// // ---- es6 import/export & modules ----
// import React from "react";
// import ReactDOM from "react-dom";
// // import pi, { doublePi, triplePi } from "./math.js";
// import * as pi from "./math.js";

// ReactDOM.render(
//   <ul>
//     {/* <li>{pi}</li>
//     <li>{doublePi()}</li>
//     <li>{triplePi()}</li> */}
//     <li>{pi.default}</li>
//     <li>{pi.doublePi()}</li>
//     <li>{pi.triplePi()}</li>
//   </ul>,
//   document.getElementById("root")
// );

// // ---- es6 import/export & modules practice ----
// import React from "react";
// import ReactDOM from "react-dom";
// import { add, multiply, subtract, divide } from "./calculator.js";

// //Import the add, multiply, subtract and divide functions
// //from the calculator.js file.
// //If successful, your website should look the same as the Final.png

// ReactDOM.render(
//   <ul>
//     <li>{add(1, 2)}</li>
//     <li>{multiply(2, 3)}</li>
//     <li>{subtract(7, 2)}</li>
//     <li>{divide(5, 2)}</li>
//   </ul>,
//   document.getElementById("root")
// );

// --- jsx attriubutes and styling ----
import React from "react";
import ReactDOM from "react-dom";
import './index.css';

const pic = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    {/* <h1 className="heading" contentEditable="true" spellCheck="false"> */}
    <h1 className="heading">My Favourite Foods</h1>
    {/* <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul> */}
    <div>
      <img src={pic + "?grayscale"} alt="random" />
      <img
        alt="dubuyo"
        className="food-img"
        src="https://th.bing.com/th/id/R.812ded33fa7831848fdf3c2100d6be0e?rik=xX7L%2bBAozYokdg&riu=http%3a%2f%2fwww.sungeiwang.com%2fwp-content%2fuploads%2f2018%2f08%2fDubuYo.jpg&ehk=KDj%2bhX0jkq3%2fYl6E2TknTiQZEuifnif76Dzw03uvyPM%3d&risl=&pid=ImgRaw&r=0"
      />
      <img
        alt="fish"
        className="food-img"
        src="https://b.zmtcdn.com/data/menus/886/7400886/1afe15c9f262ca64e3281eafb8d1e51d.jpg"
      />
      <img
        alt="shawarma"
        className="food-img"
        src="https://th.bing.com/th/id/R.a07f03e8367a17aa0e5a37daa66ebd06?rik=6aPoxwJrY2Cu6g&riu=http%3a%2f%2fwww.urdupalace.com%2fwp-content%2fuploads%2f2016%2f11%2fshawarma-recipe-in-urdu.jpg&ehk=GVVnFP9GSdQZ4ae1jZPBnm3CZxUULYKqd0%2fNRmsQKd0%3d&risl=&pid=ImgRaw&r=0"
      />
    </div>
  </div>,
  document.getElementById("root")
);

