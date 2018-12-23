import React, { Component } from "react";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";
import AddContact from "./components/contacts/AddContact";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" test="1.0" />

          <div className="container">
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
