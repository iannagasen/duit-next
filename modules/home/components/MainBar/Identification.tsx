import React, { FC, useState } from 'react'

interface Props {
  submitHandler: QuestionFormSubmitHandler
}

export const Identification:FC<Props> = ({ submitHandler }) => {
  const [term, setTerm] = useState<string>('');
  const [definition, setDefinition] = useState<string>('');

  return (
    <div>
      <input 
        type='text'
        placeholder='Enter Term'
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <input 
        type='text'
        placeholder='Enter Definition'
        value={definition}
        onChange={(e) => setDefinition(e.target.value)}
      />
      <input
        type='button'
        value="Add"
        onClick={() => submitHandler({type: 'identification', term, definition})}
      />
    </div>
  )
};