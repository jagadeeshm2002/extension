import React from "react";
import Button from "./components/Button";
import "./main.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import SearchPage from "./components/search";

export default function Main() {
  return (
    <>
      <header className="headerContainer">
        <div className="headerContent">
          <div className="headerIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=" lucide-youtube"
            >
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
              <path d="m10 15 5-3-5-3z" />
            </svg>
          </div>
          <div className="headerTitle">
            <h3>Feed Enhancer</h3>
          </div>
        </div>
      </header>
      
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />

      </Routes>
      <footer className="footer">
        <div className="footerContainer">
          <p>
            Created by{" "}
            <a href="https://github.com/jagadeeshk" target="_blank">
              Jagadeesh
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
