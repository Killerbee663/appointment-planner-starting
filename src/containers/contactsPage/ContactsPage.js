import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, contactsFunc }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  useEffect(() => {
    const isDuplicate = contacts.some(
      (contact) => name.trim().toLowerCase() === contact.name.toLowerCase()
    );
    setDuplicate(isDuplicate);
  }, [name, contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate && name && phone && email) {
      contactsFunc(name.trim(), phone.trim(), email.trim());
      setName("");
      setPhone("");
      setEmail("");
    }
  };


  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        {duplicate && <p style={{ color: "red" }}>Name already exists!</p>}
        <ContactForm
          name={name}
          phone={phone}
          email={email}
          handleSubmit={handleSubmit}
          setEmail={setEmail}
          setName={setName}
          setPhone={setPhone}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList list={contacts} />
      </section>
    </div>
  );
};
