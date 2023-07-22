import { BASE_URL } from '@/modules/common/constants/base-url';
import axios from 'axios';
import React, { FC, useState } from 'react'
import QuestionList from './QuestionList';
import QuestionForm from './QuestionForm';

interface Props {
  topic: string;
  questions: Question[];
}

const QuestionManager:FC<Props> = ({ topic, questions }) => {
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>(questions);

  const handleAddQuestion = async (question: Question) => {
    // setLoading(true);

    await axios
      .post(`${BASE_URL}/question/mcq`, {
        topic: topic,
        question: question.question,
        choices: question.choices.map(c => ({choice: c}))
      })
      .then((res) => {
        const savedQuestion = {...question, id: res.data};
        setCurrentQuestions((prev) => [...prev, savedQuestion]);
      })
      .catch((err) => {
        // setError(err)
      })
      .finally(() => {
        // setLoading(false);
      });
  }
  
  return (
    <div>
      <QuestionList questions={currentQuestions} onUpdateQuestion={() => {}} />
      <QuestionForm onAddQuestion={handleAddQuestion} />
    </div>
  )
}

export default QuestionManager
