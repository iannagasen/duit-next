import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import React, { FC, useState } from 'react'
import McqChoices from './McqChoices';
import { Button } from '@/components/ui/button';

interface Props {
  question: Question;
  onUpdate: (question: UpdateQuestionRequestBody) => void;
}

const QuestionCard:FC<Props> = ({ question, onUpdate }) => {
  const [updatedQuestion, setUpdatedQuestion] = useState(question.question);
  const [updatedChoices, setUpdatedChoices] = useState(question.choices);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleChoiceUpdate: UpdateChoiceDTO = (choice, payload) => {
    if (payload === 'UPDATE-CHOICE') {
      const newChoices = updatedChoices.map((c) => {
        return {...c, isCorrect: (c.id === choice.id ? 'Y' : 'N') }
      })
      setUpdatedChoices(newChoices);
    }
  }

  return (
    <Card className='bg-clr-secondary border-none text-white m-3 p-3'>
      <form>
        <div className='mb-4'>
          <label htmlFor='question'/>
          <textarea
            className="block w-full resize-none align-bottom outline-none border-0 border-b-2 focus:border-blue-400 focus:ring-0 bg-inherit" 
            rows={getEstimatedRowCount(updatedQuestion.length)} 
            id='question'
            value={updatedQuestion}
            onChange={(e) => setUpdatedQuestion(e.target.value)}
            disabled={!isUpdating}
          />
        </div>
        <McqChoices choices={updatedChoices} onUpdate={handleChoiceUpdate} disabled={!isUpdating}/>
        <div className='pt-3 mt-2'>
        {
          !isUpdating &&
          <Button 
            className='w-full bg-blue-300' 
            variant="secondary" 
            onClick={() => setIsUpdating(true)}
          >
            Update
          </Button>
        }
        {
          isUpdating && 
          <Button 
            className='w-full bg-clr-accent'
            onClick={() => {
              setIsUpdating(false);
              onUpdate({
                id: question.id,
                updatedQuestion: updatedQuestion,
                updatedChoices: updatedChoices
              })
            }}>
            Save
          </Button>
        }
        </div>
      </form>
    </Card>
      
  )
}

const getEstimatedRowCount = (length: number) => {
  if (length <= 90) return 1;
  if (length <= 180) return 2;
  return 3;
}



export default QuestionCard