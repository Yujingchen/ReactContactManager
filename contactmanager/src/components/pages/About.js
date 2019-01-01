import React from "react";

export default function About() {
  return (
    <div>
      <h1 className="display-4">About Contact Manager</h1>
      {/* <h1 className="display-4">{props.match.params.id</h1> add parameters in about pages*/}
      <p className="lead">Simple app to manage contacts</p>
      <p className="text-secondary">Version 1.0.0</p>
    </div>
  );
}
