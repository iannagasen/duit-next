import React, { useEffect, useState } from 'react'
import { QuestionForm } from './QuestionForm';
import axios from 'axios';
import { BASE_URL } from '@/modules/common/constants/base-url';
import { useDidUpdateEffect } from '@/modules/common/hooks';
import useFetchPost from '@/modules/common/hooks/useFetchPost';

export const QuestionManager = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState<any>();
  const [error, setError] = useState<any>();

  const onSubmit = async (formData: QuestionFormData): Promise<void> => {
    const question = convertToQuestion(formData);

    setLoading(true);
    console.log("SET LOADING TO TRUE");

    await axios
      .post(`${BASE_URL}/question/mcq`, {
        topic: "AWS",
        question: question.question,
        choices: question.choices.map(c => ({choice: c}))
      })
      .then((res) => {
        const savedQuestion = {...question, id: res.data};
        setQuestions((prev) => [...prev, savedQuestion]);
        console.log(res);
      })
      .catch((err) => {
        setError(err)
        console.log(err)
      })
      .finally(() => {
        setLoading(false);
        console.log("SET LOADING TO FALSE");
      });
  }
  

  return (
    <>
      <div>
        Title of the subject
      </div>
      <div>
      {
        questions.map((q, i) => (
          <div key={q.id} className='flex flex-col'>
            <div>{q.question}</div>
            {
              q.choices.map((c, i) => (
                <div key={i}>{c}</div>
              ))
            }
          </div>
        ))
      }
      <QuestionForm submitHandler={onSubmit}/>
      </div>
    </>
  )
}

const convertToQuestion = (formData: QuestionFormData): Question => {
  if (formData.type === 'mcq') {
    return {
      id: 1,
      choices: formData.choices,
      question: formData.question
    }
  } else {
    return {
      choices: [''],
      id: 2,
      question: formData.term
    }
  }
}