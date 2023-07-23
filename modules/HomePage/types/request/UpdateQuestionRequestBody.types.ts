type UpdateQuestionRequestBody = {
  id: number,
  updatedQuestion: string,
  updatedChoices: {
    id: number,
    choice: string,
    explanation: string,
    isCorrect: string,
  } []
}