import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import HomeJustPrix from "./component/HomeJustePrix";
import reportWebVitals from "./reportWebVitals";
import Tick from "./component/Tick"
Tick.defaultProps = {
  start: 0,
  step: 1
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <React.StrictMode>
    {/* <App /> */}
    <HomeJustPrix />
    <Tick />
  </React.StrictMode>


)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
