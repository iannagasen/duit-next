import { BASE_URL } from '@/modules/common/constants/base-url';
import axios from 'axios';
import React, { FC, useState } from 'react'
import QuestionList from './QuestionList';
import QuestionForm from './QuestionForm';
import { Button } from '@/components/ui/button';
import QuestionsContextProvider from '../contexts/QuestionContextProvider';

interface Props {
  topic: string;
  questions: Question[];
}

const QuestionManager:FC<Props> = ({ topic, questions }) => {
  return (
    <QuestionsContextProvider questions={questions}>
      <>
        <QuestionList />
        {/* <div className='p-3 -mt-4'>
          <Button className='w-full bg-clr-primary' variant="outline" onClick={handleCreateQuestionTemplate}>
            Add
          </Button>
        </div> */}
      </>
    </QuestionsContextProvider>
  );
}


// const QuestionManager:FC<Props> = ({ topic, questions }) => {
//   const [currentQuestions, setCurrentQuestions] = useState<Question[]>(questions);

//   const handleAddQuestion = async (question: Question) => {
//     // setLoading(true);

//     await axios
//       .post(`${BASE_URL}/question/mcq`, {
//         topic: topic,
//         question: question.question,
//         choices: question.choices.map(c => ({choice: c}))
//       })
//       .then((res) => {
//         const savedQuestion = {...question, id: res.data};
//         setCurrentQuestions((prev) => [...prev, savedQuestion]);
//       })
//       .catch((err) => {
//         // setError(err)
//       })
//       .finally(() => {
//         // setLoading(false);
//       });
//   }

//   const handleQuestionUpdate = (question: UpdateQuestionRequestBody) => {
//     console.log("UPDATING");

//     axios
//       .put(`${BASE_URL}/question/mcq`, question)
//       .then((res) => {
//         console.log(res)
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   }

//   const handleCreateQuestionTemplate = () => {
//     const questionTemplate: Question = {
//       id: -1,
//       question: 'Enter Question',
//       topic: topic,
//       choices: [
//         { id: -1, choice: "A", explanation: "enter explanation", isCorrect: "Y" },
//         { id: -2, choice: "B", explanation: "enter explanation", isCorrect: "N" },
//         { id: -3, choice: "C", explanation: "enter explanation", isCorrect: "N" }
//       ]
//     };

//     setCurrentQuestions((prev) => [...prev, questionTemplate]);
//   }
  
//   return (
//     <div>
//       <QuestionList questions={currentQuestions} onUpdateQuestion={handleQuestionUpdate} />
//       <QuestionForm onAddQuestion={handleAddQuestion} />
//       <div className='p-3 -mt-4'>
//         <Button className='w-full bg-clr-primary' variant="outline" onClick={handleCreateQuestionTemplate}>
//           Add
//         </Button>
//       </div>
//     </div>
//   )
// }

export default QuestionManager
