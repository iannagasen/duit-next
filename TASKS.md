Learnings:
  - Base Component
    - Sample: QuestionCard (if suffix with a Layout Component, means that it is use as presentation component)
      - NewQuestion
        - events
          - onSave
      - ExistingQuestion
        - state:
          - isUpdating
          - isCorrect
        - events:
          - onCancel
          - onUpdate
          - onSave

Components:
  - NewQuestion - Controlled Component
    - UI: 
      - QuestionCardForm
    - props:
      - onSave: (AddQuestionDTO) => void
    - events:
      - onSave
  - UpdateableQuestion - Controlled Component
    - UI:
      - QuestionCardForm
    - props:
      - question:
      - onUpdate:
    - events:
      - onCancel
      - onSave
      - onUpdate
  - ReadOnlyQuestion - Dummy Component
    - UI
      - QuestionCard
  - QuestionList - List Component
    - props: 
      - renderAs: UpdateableQuestion | ReadOnlyQuestion
      - questions
  - QuestionManager
    - props: 
      - questions
    - uses:
      - Q

## DESIGN OF MCQ QUIZ
1. McqQuizContainer
  - props:
    - questions:
    - options:
  - context:
    - McqQuizContext
      - keeps track of current items done
      - types:
        - SELECT_ANSWER
        - UPDATE_ANSWER
        - SUBMIT_QUIZ
        - SUBMIT_ANSWER

---------------------

Tasks:
  - [X] Add color to each flex items in the Main Layout
    - implemented using Quizlet colors
  - [X] Able to add question
  - [X] Move to useContext to avoid Prop Drilling
  - [ ] Add Template for TimedMcqQuiz
