import { Answer } from "../../../helpers/database/models.js";


export interface IAnswer {
  statement: string,
  isCorrect: Boolean
}

export default async (questionId: number, answer: IAnswer) => {
  const { statement, isCorrect } = answer;
  const createdAnswer = await Answer.create({
    questionId,
    statement,
    isCorrect
  })
  return createdAnswer.dataValues;
}