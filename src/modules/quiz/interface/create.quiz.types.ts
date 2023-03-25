import { IQuestion } from "../../question/functions/create.question.js";


export interface ICreateQuiz {
  title: string,
  description?: string,
  isPublished?: boolean,
  questions?: Array<IQuestion>
}