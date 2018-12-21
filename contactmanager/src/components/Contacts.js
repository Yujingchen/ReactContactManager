import React, { Component } from "react";
import Contact from "./Contact";
class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "David Water",
        email: "dwater@gamil.com",
        phone: "1234-1234-1234"
      },
      {
        id: 2,
        name: "John Nelson",
        email: "Jnelson@gamil.com",
        phone: "3333-3333-3333"
      },
      {
        id: 3,
        name: "Jack Lawson",
        email: "Jlawson@gamil.com",
        phone: "777-777-777"
      }
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default Contacts;
