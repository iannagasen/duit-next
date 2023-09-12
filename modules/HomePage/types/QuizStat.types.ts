export type QuizStat = {
  type: 'QUIZ_STAT',
  data:{ 
    dateTaken: string, 
    score: number, 
    totalItems: number
  }[] | null
}

export type EmptyStat = {
  type: 'EMPTY'
}

export type StatInfo = QuizStat | EmptyStat;