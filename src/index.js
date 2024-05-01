
import React from "react";
import ReactDOM from "react-dom/client";      
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
//import Sidebar from "./components/Sidebar/Sidebar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="flex w-full">
        {/* <div className="w-[50%] fixed">
        <Sidebar/>
        </div>  */}
        <div className="flex-grow">
          <App />
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();