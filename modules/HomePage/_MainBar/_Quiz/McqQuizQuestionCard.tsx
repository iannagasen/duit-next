import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import React, { FC, useContext, useState } from 'react'
import { McqQuizContext } from '../contexts/McqQuizContextProvider'

const McqQuizQuestionCard:FC<Question> = ( question ) => {
  const [quizState, dispatch] = useContext(McqQuizContext);

  console.log(quizState)

  const selectedChoiceId = quizState.find(q => q.questionId === question.id)?.selectedChoiceId;

  return (
    <Card className='bg-clr-secondary border-none text-white m-3 p-3'>
      <div className='mb-4'>
        <div className='semi-bold'>
          {question.question}
        </div>
      </div>
      <div className='pt-1'>
        <div>
        { question.choices.map(c => (
          <div key={c.id} className='flex space-x-2'>
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
              onChange={() => dispatch({
                type: 'UPDATE_ANSWER',
                payload: {
                  questionId: question.id,
                  selectedChoiceId: c.id
                }
              })}
              checked={selectedChoiceId === c.id}
            />
            </div>
            <label htmlFor={`c-${c.id}`} className="text-sm">
              <div className={cn(
                  "font-medium text-base", 
                  // c.isCorrect === 'Y' && 'text-clr-accent'
              )}>{c.choice}</div>
              {/* <p>{c.explanation}</p> */}
            </label>
            </div>
        ))}
        </div>
      </div>
    </Card>
  )
}

export default McqQuizQuestionCard