type Choices = string[]

interface Question {
  id: number,
  question: string,
  choices: Choices
}

type QuestionType = "mcq" | "identification";

interface McqFormData {
  type: "mcq",
  question: string,
  choices: string[]
}

interface IdentificationFormData {
  type: "identification",
  term: string,
  definition: string
}

type QuestionFormData = McqFormData | IdentificationFormData;

type QuestionFormSubmitHandler = (formData: QuestionFormData) => void;