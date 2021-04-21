import React from 'react'

export const Filter = ({onChangeFilter}) => {
    return ( 
        <div>
        filter show with <input onChange={onChangeFilter}/>
      </div>
    )
}