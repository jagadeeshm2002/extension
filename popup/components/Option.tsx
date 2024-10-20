import React from "react";
import "./option.css";
import Button from "./Button";
import { Link } from "react-router-dom";

function Option() {
  return (
    <div className="optionContainer">
      <div className="optionWrapper">
        <div className="iconContainer">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#d0d0d0"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-filter-x"
            >
              <path d="M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055" />
              <path d="m22 3-5 5" />
              <path d="m17 3 5 5" />
            </svg>
          </div>
        </div>
        <div className="textContainer">
          <div className="optionTitle">
            <p>Topic Feed Filter</p>
          </div>
          <div className="optionDescription">
            <p>this filter out your youtube feed based on your topic</p>
          </div>
        </div>
        <div className="buttonContainer">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Option;

export function OptionButton() {
  return (
    <div className="optionContainer">
      <Link to="search" className="optionWrapper">
        <div className="iconContainer">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#d0d0d0"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-filter-x"
            >
              <path d="M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055" />
              <path d="m22 3-5 5" />
              <path d="m17 3 5 5" />
            </svg>
          </div>
        </div>
        <div className="textContainer">
          <div className="optionTitle">
            <p>Search Trigger AI</p>
          </div>
          <div className="optionDescription">
            <p>
              Our Extension do some search in your YouTube search in background
              to improve your feed
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
