import React from 'react';


export const Contact = ({person, onDelete}) => {


    return ( 
        <li>
            {person.name} {" "}
            {person.number} {" "}
            <button onClick={() => onDelete(person.name,person.id)}>Delete</button>
        </li>
    )
}