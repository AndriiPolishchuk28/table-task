import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import "./styles/global.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/table-task">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
