interface McqChoice {
  id: number;
  choice: string;
  explanation: string;
  isCorrect: string;
}

interface Mcq {
  id: number;
  topic: string;
  question: string;
  choices: McqChoice[];
}

interface McqList {
  list: Mcq[];
}

interface Topic {
  id: number;
  topic: string;
}

interface TopicList {
  topics: Topic[];
}

interface HomePageData {
  mcqs: McqList;
  topics: TopicList;
}