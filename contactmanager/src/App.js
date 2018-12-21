import React, { Component } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" test="1.0" />
        <div className="container">
          <Contact
            name="David Water"
            email="dwater@gamil.com"
            phone="1234-1234-1234"
          />
          <Contact
            name="John Nelson"
            email="Jnelson@gamil.com"
            phone="3333-3333-3333"
          />
        </div>
      </div>
    );
  }
}

export default App;
