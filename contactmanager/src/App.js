import React, { Component } from "react";
import "./App.css";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" test="1.0" />
        <div className="container">
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
