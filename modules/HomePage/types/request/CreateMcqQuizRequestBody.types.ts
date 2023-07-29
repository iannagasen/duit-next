import { McqQuizState } from '../../_MainBar/contexts/McqQuizContextProvider';

export class CreateMcqQuizRequestBody {
  static fromQuizState(quizState: McqQuizState) {
    return new CreateMcqQuizRequestBody(
      new Date(),
      30000, // TODO - handle the time taken
      "AWS", // TODO - handle
      quizState.itemsState.map(i => ({
        mcqId: i.questionId,
        choiceId: i.selectedChoiceId === -1 ? null : i.selectedChoiceId
      }))
    );
  }

  constructor(  
    public dateTaken: Date, 
    public timeTaken: number, 
    public topic: string,
    public results: {
      mcqId: number,
      choiceId: number | null,
    }[]
  ) {}
}