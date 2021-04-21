import React from 'react';

export const ContactForm = ({addPerson,onChangeName,onChangeNumber}) => {
    return (
        <form onSubmit={addPerson}>
        <div>
          name: <input onChange={onChangeName} />
          <br/>
          number: <input onChange={onChangeNumber} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    )
}