import React, { FC } from 'react'
import McqChoice from './McqChoice';

interface Props {
  choices: McqChoice[];
  onUpdate: UpdateChoiceDTO;
  disabled: boolean
}

const McqChoices:FC<Props> = ({ choices, onUpdate, disabled }) => {

  return (
    <div className='pt-1'>
      <div className="mx-auto space-y-2">
      {
      choices.map(c => (<McqChoice key={c.id} choice={c} onUpdate={onUpdate} disabled={disabled} />))
      }
      </div>
    </div>
  )
}

export default McqChoices