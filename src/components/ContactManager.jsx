import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { contactsList } from '../contacts-list';
import Contact from './Contact';
import ContactEditor from './ContactEditor';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: overlay;
  @media (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
    flex-wrap: nowrap;
  }
`;

const ContactManager = () => {
  const [contacts, setContacts] = useState(contactsList);
  const [isCreate, setIsCreate] = useState(false);

  const handleAdd = (newContactData) => {

    setContacts((prev)=> [...prev,newContactData])
  };

  const handleDelete = (contactId) => {
    let newContacts = [...contacts];
    newContacts = newContacts.filter((contact) => contact.id !== contactId);
    setContacts(newContacts);
  };

  const handleEdit = (EditedContactData) => {
    const { id } = EditedContactData;

    setContacts((prev) => {
      return prev.map((contact) => {
        if (contact.id === id) return EditedContactData;
        else return contact;
      });
    });
  };
  return (
    <Container>
      {contacts.map((contact, i) => (
        <Contact
          key={i}
          contact={contact}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
      {isCreate && <ContactEditor src="create" setIsCreate={setIsCreate} handleAdd={handleAdd}/>}
      <button
        onClick={() => setIsCreate(true)}
        style={{
          width: '100px',
          height: '60px',
          backgroundColor: 'white',
          margin: '20px auto',
        }}
      >
        +
      </button>
    </Container>
  );
};

export default ContactManager;
