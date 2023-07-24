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
  

Tasks:
  - [X] Add color to each flex items in the Main Layout
    - implemented using Quizlet colors
  - [ ] Able to add question
