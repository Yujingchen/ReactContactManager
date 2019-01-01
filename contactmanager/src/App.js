import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";
import AddContact from "./components/contacts/AddContact";

class App extends Component {
  render() {
    return (
      <Router>
        <Provider>
          <div className="App">
            <Header branding="Contact Manager" test="1.0" />

            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/about/:id" component={About} />
              </Switch>
            </div>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
