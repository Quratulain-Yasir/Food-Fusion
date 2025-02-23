import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createGlobalStyle } from "styled-components";

const GLobalStyle = createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing:border-box;
}
html , body {
 
}
`

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

      <App />
    
  </React.StrictMode>
);
