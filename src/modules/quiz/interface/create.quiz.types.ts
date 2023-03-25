
interface IAnswer {
  statement: string,
  isCorrect: Boolean
}
interface IQuestion {
  statement: string,
  isMandatory?: boolean,
  answers?: Array<IAnswer>
}
export interface ICreateQuiz {
  title: string,
  description?: string,
  isPublished?: boolean,
  questions?: Array<IQuestion>
}