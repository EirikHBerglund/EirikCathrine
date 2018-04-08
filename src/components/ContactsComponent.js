import * as React from "react";

export class ContactsComponent extends React.Component {
  render() {
    const contacts = [
      {
        name: "Eirik Håland Berglund",
        role: "Brugdom",
        email: "eirik.h.berglund@gmail.com",
        phone: "45 42 89 50"
      },
      {
        name: "Cathrine Marceliussen",
        role: "Brud",
        email: "cathrine.m_91@hotmail.com",
        phone: "47 65 00 16"
      },
      {
        name: "Benjamin Skåtun",
        role: "Visevert/Toastmaster",
        email: "",
        phone: "406 40 104"
      }
    ];

    return (
      <div>
        <h3>Kontaktpersoner</h3>
        <div className="list-group">
          {contacts.map(contact => (
            <div className="list-group-item" key={contact.name}>
              <ContactPerson
                name={contact.name}
                role={contact.role}
                email={contact.email}
                phone={contact.phone}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const ContactPerson = props => {
  return (
    <div>
      <h4>
        {props.name} - {props.role}
      </h4>
      <ul>
        <li>{props.email}</li>
        <li>{props.phone}</li>
      </ul>
    </div>
  );
};
