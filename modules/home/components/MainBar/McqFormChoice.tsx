
import React, { FC, useState } from 'react'

type Props = {
  placeholder: string,
  choice: string,
  onChange: (choice: string) => void;
}

export const McqFormChoice:FC<Props> = ({ placeholder, onChange, choice }) => {
  return (
    <div>
      <input 
        type='text'
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        value={choice}
      />
    </div>
  )
}