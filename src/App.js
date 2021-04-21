import React, { useState, useEffect } from 'react';
import {Filter} from './components/Filter';
import {ContactForm} from './components/ContactForm';
import {Contacts} from './components/Contacts';
import contactService from './services/numbers';

const App = () => {

  

  const [ contacts, setContacts ] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ newFilter, setNewFilter ] = useState('');

  useEffect(() => {
    contactService
      .getAllContacts()
      .then(initialContacts => {
        setContacts(initialContacts);
      })
    
  }, [])

  const onChangeFilter = (event) => {
    setNewFilter(event.target.value);
  }

  const onChangeName = (event) => {
    setNewName(event.target.value);
  }

  const onChangeNumber = (event) => {
    setNewNumber(event.target.value);
  }

  const onDelete = (name, id) => {


    contactService
      .deleteContact(id)
      .then(() => {
        setContacts(contacts.filter(contact => contact.id !== id))
      })
    
  }

  const addPerson = (event) => {
    event.preventDefault();
    const res = contacts.filter(contact => contact.name === newName);

    if (res.length > 0) {
      alert( newName +" is in the list");
      return;
    }

    const newPerson = {
      name: newName,
      number: newNumber,
      id: contacts.length + 1,
    }

    contactService
      .createContact(newPerson)
      .then(setContacts([...contacts,newPerson]))
  }

  const contactsToShow = newFilter === "" 
    ? contacts
    : contacts.filter(contact => contact.name.includes(newFilter))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChangeFilter={onChangeFilter} />
      <h2>add a new</h2>
      <ContactForm 
        addPerson={addPerson} 
        onChangeName={onChangeName} 
        onChangeNumber={onChangeNumber} 
      />
      <h2>Numbers</h2>
      <Contacts contactsToShow={contactsToShow} onDelete={onDelete}/>
    </div>
  )
}

export default App;
