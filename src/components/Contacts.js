import React from 'react';
import {Contact} from './Contact'



export const Contacts = ({contactsToShow,onDelete}) => {
  
  
    return (
        <ul>
        {contactsToShow.map(person => 
          <Contact key={person.id} person={person} onDelete={onDelete}/>
        )}
      </ul>
    )
} 