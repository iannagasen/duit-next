import React, { ChangeEventHandler, FC, useState } from 'react'
import { Identification } from './Identification';
import { McqForm } from './McqForm';

interface Props {
  submitHandler: QuestionFormSubmitHandler
}

export const QuestionForm:FC<Props> = ({submitHandler}) => {
  const [questionType, setQuestionType] = useState<QuestionType>("mcq");

  const handleSubmit = (formData: QuestionFormData): void => {
    submitHandler(formData);
  }

  return (
    <div>
      <label htmlFor='question-type'>
        Choose Question Type
      </label>
      <select 
        name="question-type" 
        onChange={(e) => setQuestionType(e.target.value as QuestionType)}
        value={questionType}
      >
        <option value="mcq">MCQ</option>
        <option value="identification">Identification</option>
      </select>
      { questionType === 'identification' && <Identification submitHandler={handleSubmit}/> }
      { questionType === 'mcq' && <McqForm submitHandler={handleSubmit}/>}
    </div>
  )
}
