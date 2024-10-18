import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StateContextProvider } from "./Context/index.jsx";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StateContextProvider>
      <App /> 
    </StateContextProvider>
    <Toaster/>
  </BrowserRouter>
);
