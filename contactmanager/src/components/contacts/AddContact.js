import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  render() {
    const { name, email, phone } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="name"> Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="name"
                placeholder="Enter Name..."
                value={name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email"> Name</label>
              <input
                type="email"
                className="form-control form-control-lg"
                name="email"
                placeholder="Enter E-mail..."
                value={email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone"> Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="phone"
                placeholder="Enter phone..."
                value={phone}
              />
            </div>
            <input
              type="sumbit"
              value="Add Contact"
              className="btn btn-block btn-light"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
