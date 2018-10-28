/*global chrome*/
import React from "react";
import ReactDOM from "react-dom";
import Router from "route-lite";
import { MainApp } from "./components/MainApp";
import "./content.css";

const toggle = () => {
  const displayState = newDiv.style.display === "none" ? "block" : "none";
  newDiv.style.display = displayState;
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.message) {
    case "BROWSER_ACTION_ONCLICK":
      return toggle();
    default:
      return null;
  }
});

const newDiv = document.createElement("div");
newDiv.id = "extension-root";
document.body.appendChild(newDiv);
newDiv.style.display = "none";

ReactDOM.render(
  <Router>
    <MainApp />
  </Router>,
  newDiv
);
