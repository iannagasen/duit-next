import { BASE_URL } from '@/modules/common/constants/base-url';
import React, { useEffect, useState, useContext } from 'react';
import { StatBarContext } from '../contexts/StatBarContextProvider';

type QuizStatInput = { type: "QUIZ_STAT"; quizTopic: string };
type QuestionStatInput = { type: "QUESTION_STAT"; questionId: number };
type EmptyInput = { type: "EMPTY" }
type Input = QuizStatInput | EmptyInput


// Define two function overloads with specific input types and return types
export function useStatBar(props: Input) {
  const [, dispatch] = useContext(StatBarContext);

  useEffect(() => {
    if (props.type === 'QUIZ_STAT') {
      fetch(`${BASE_URL}/quiz/${props.quizTopic}/statistics`)
        .then(res => res.json())
        .then(res => dispatch({type: 'QUIZ_STAT', payload: res}));
    }
  }, [props])
} 



