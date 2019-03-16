import React, { Component } from "react";
import "./App.css";
import LoginForm from "./login-form";
import RepoSelection from "./repo-selection";

class App extends Component {
  render() {
    return <RepoSelection />;
    // return <LoginForm />;
  }
}

export default App;
