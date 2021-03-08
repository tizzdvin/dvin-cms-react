import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="gray-background">
        <img src={logo} alt="logo" />
        <h2>tizzbird digital signage develop</h2>
      </div>
    );
  }
}

export default App;
