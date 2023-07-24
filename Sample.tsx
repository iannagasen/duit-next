import { FC, ReactNode, createContext, useReducer } from "react";
import * as React from 'react';

type Choice = {
  id: string,
  choice: string,
  explanation: string,
  isCorrect: string,
}

type Question2 = {
  id: number,
  question: string,
  choices: Choice[]
}

type UpdateQuestionPayload = Question2
type CreateQuestionPayload = Question2
type DeleteQuestionPayload = { id: number }

type QuestionsContextAction =  
    | { type: 'CREATE', payload: CreateQuestionPayload }
    | { type: 'UPDATE', payload: UpdateQuestionPayload }
    | { type: 'DELETE', payload: DeleteQuestionPayload }

const QuestionsContext = createContext({});

const questionsReducer = ( questionState: Question2[], action: QuestionsContextAction ): Question2[] => {
  switch(action.type) {
    case "CREATE":
      return [...questionState, action.payload];
    case "UPDATE":
      return questionState.map(q => (q.id === action.payload.id) ? action.payload : q)
    case "DELETE":
      return questionState.filter(q => q.id !== action.payload.id);
    default:
      return questionState;
  }
}

const QuestionsContextProvider = ({ questions, children }: { questions: Question2[], children: ReactNode }) => {
  return (
    <QuestionsContext.Provider value={useReducer(questionsReducer, questions)}>
      {children}
    </QuestionsContext.Provider>
  )
}

const QuestionsManager = ({ questions }: { questions: Question2[] }) => {

  return (
    <QuestionsContextProvider questions={questions}>
      
    </QuestionsContextProvider>
  )
}

type QuestionCardType = "UPDATABLE" | "READONLY"

type QuestionListProps = {
  questions: Question2[],
  cardType: QuestionCardType
}

const QuestionList:FC<QuestionListProps> = ({ questions, cardType }) => {
  return (
    <div>
    {
      questions.map(q => (
        <>
          { cardType === "READONLY" && <ReadonlyQuestionCard question={q}/> }
          { cardType === "UPDATABLE" && <UpdatableQuestionCard question={q} /> }
        </>
      ))
    }
    </div>
  )
}


const ReadonlyQuestionCard:FC<{question: Question2}> = ({ question }) => {
  return (
    <>

    </>
  )
}

const UpdatableQuestionCard:FC<{question: Question2}> = ({ question }) => {
  return (
    <>
    
    </>
  )
}

