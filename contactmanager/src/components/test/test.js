//Life cycle methods

import React, { Component } from "react";

class Test extends Component {
  state = {
    test: "test"
  };
  componentDidMount() {
    console.log("componentDidMount....");
  }
  componentWillMount() {
    console.log("componentWillMount....");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate....");
  }
  componentWillUpdate() {
    console.log("componentWillUpdate....");
  }
  componentWillReceiveProps(nextProps, nextState) {
    console.log("componentWillReceiveProps...");
  }

  static getDervivedStateFromProps(nextProps, prevState) {
    return null;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate...");
  }

  render() {
    return (
      <div>
        <h1>Test component</h1>
      </div>
    );
  }
}

export default Test;
