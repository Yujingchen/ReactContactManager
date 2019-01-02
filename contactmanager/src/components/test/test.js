//Life cycle methods

import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      //fetch return a promise then it is parse into json
      .then(data =>
        //work with JSON data here
        this.setState({
          title: data.title,
          body: data.body
        })
      ); //.catch(err=>{}) Do something for an error;
  }
  //   componentWillMount() {
  //     console.log("componentWillMount....");
  //   }

  //   componentDidUpdate() {
  //     console.log("componentDidUpdate....");
  //   }
  //   componentWillUpdate() {
  //     console.log("componentWillUpdate....");
  //   }
  //   componentWillReceiveProps(nextProps, nextState) {
  //     console.log("componentWillReceiveProps...");
  //   }

  //   static getDervivedStateFromProps(nextProps, prevState) {
  //     return null;
  //   }
  //   getSnapshotBeforeUpdate(prevProps, prevState) {
  //     console.log("getSnapshotBeforeUpdate...");
  //   }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
