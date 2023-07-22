import React, { FC, useState } from 'react'
import { McqFormChoice } from './McqFormChoice';

interface Props {
  submitHandler: QuestionFormSubmitHandler
}

export const McqForm:FC<Props> = ({ submitHandler }) => {
  const DEFAULT_QUESTION = '';
  const DEFAULT_CHOICES = ['', '', '']

  const [question, setQuestion] = useState<string>(DEFAULT_QUESTION);
  const [choices, setChoices] = useState<Choices>(DEFAULT_CHOICES);

  // Curried Fx as a Fx Factory
  const handleChoiceBlur = (i: number) => {
    return (choice: string) => {
      const newChoices = choices.map((c, j) => (j === i) ? choice : c);
      setChoices(newChoices);
    }
  }

  const onClickAdd = () => {
    submitHandler({type:'mcq', question, choices});
    setChoices(DEFAULT_CHOICES);
    setQuestion(DEFAULT_QUESTION);
  }

  return (
    <div>
      <input 
        type='text'
        placeholder='Enter Question'
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      {
        choices.map((c, i) => (
          <McqFormChoice 
            key={i}
            choice={c}
            placeholder={`Choice ${i+1}`}
            onChange={handleChoiceBlur(i)}
          />
        ))
      }
      <input
        type="button"
        value="Add"
        onClick={onClickAdd}
      />
    </div>
  )
}
