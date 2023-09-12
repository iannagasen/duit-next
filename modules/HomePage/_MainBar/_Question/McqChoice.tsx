import { cn } from '@/lib/utils';
import React, { FC } from 'react'

interface Props {
  choice: McqChoice;
  onUpdate: UpdateChoiceDTO;
  disabled: boolean;
}

const McqChoice:FC<Props> = ({ choice: c, onUpdate, disabled }) => {
  return (
    <>
      <div className="flex space-x-2">
        <div className="flex h-5 items-center">
          <input 
            type="radio" 
            id={`c-${c.id}`} 
            className={cn(
              "h-4 w-4 rounded-full text-primary-600 shadow-sm", 
              "focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0", 
              "disabled:cursor-not-allowed",
            )}
            name={`c-${c.id}`}
            onChange={() => onUpdate(c, "UPDATE-CHOICE")}
            disabled={disabled}
            checked={c.isCorrect === 'Y'}
          />
        </div>
        <label htmlFor={`c-${c.id}`} className="text-sm">
          <div className={cn(
              "font-medium text-base", 
              c.isCorrect === 'Y' && 'text-clr-accent'
          )}>{c.choice}</div>
          <p>{c.explanation}</p>
        </label>
      </div>
    </>
  )
}

export default McqChoice
