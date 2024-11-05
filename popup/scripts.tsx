import React from "react";
import ReactDOM from "react-dom/client";
import { Route, MemoryRouter as Router, Routes } from "react-router-dom";

import "./styles.css";

import Main from "./Main";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="*" element={<Main />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
