import { McqQuizItemState } from "../contexts/McqQuizContextProvider";

/**
 * Utility function to get the number of score, total, unanswered
 * TODO: This is tightly coupled QuizItemState and Question type 
 */
export const calculateScore = (questions: Question[], quizItemsState: McqQuizItemState[]): ScoreTally => {
  let score = 0, total = 0, unAnswered = 0;
  for (const item of quizItemsState) {
    ++total
    if (item.selectedChoiceId === -1) {
      ++unAnswered;
    } else {
      const correctChoice = questions.find(q => q.id === item.questionId)?.choices?.find(c => c.isCorrect === 'Y')
      if (correctChoice?.id === item.selectedChoiceId) {
        ++score;
      }
    }
  }

  return {score, total, unAnswered}
}