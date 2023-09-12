import { BASE_URL } from '@/modules/common/constants/base-url';
import React, { useEffect, useState, useContext, useRef } from 'react';
import { StatBarContext } from '../contexts/StatBarContextProvider';

type QuizStatInput = { type: "QUIZ_STAT"; quizTopic: string };
type QuestionStatInput = { type: "QUESTION_STAT"; questionId: number };
type EmptyInput = { type: "EMPTY" }
type Input = QuizStatInput | EmptyInput | QuestionStatInput


// Define two function overloads with specific input types and return types
export function useStatBar(props: Input) {
  const [, dispatch] = useContext(StatBarContext);

  useEffect(() => {
    if (props.type === 'QUIZ_STAT') {
      console.log("EXECUTING FETCH")
      fetch(`${BASE_URL}/quiz/${props.quizTopic}/statistics`)
        .then(res => res.json())
        .then(res => dispatch({
          type: 'QUIZ_STAT', 
          payload: {
            type: 'QUIZ_STAT', // QUIZ STAT is repeated. check context, maybe handle this on the reducer
            data: res
          }
        }));
    }
  }, [
    props.type,
    props.type === 'QUIZ_STAT' ? props.quizTopic : null,
    props.type === 'QUESTION_STAT' ? props.questionId : null
  ])
} 



