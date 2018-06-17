import * as React from "react";

export class ContactsComponent extends React.Component {
  render() {
    const contacts = [
      {
        name: "Eirik Håland Berglund",
        role: "Brudgom",
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
      },
      {
        name: "Fridtjof Holst Øyasæter",
        role: "Forlover, Eirik",
        email: "fridtjof.oyaseter@gmail.com",
        phone: "45 48 43 23"
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
      <h4>{props.name}</h4>
      <ul>
        <ContactPersonProperty value={"Hva: " + props.role} />
        <ContactPersonProperty value={"Telefon: " + props.phone} />
        <ContactPersonProperty value={"Epost:   " + props.email} />
      </ul>
    </div>
  );
};

const ContactPersonProperty = props => {
  if (props.value.length > 1) {
    return <li>{props.value}</li>;
  } else {
    return <span />;
  }
};
