import { Question } from "../../../helpers/database/models.js";
import createAnswer, { IAnswer } from "../../answer/functions/create.answer.js";


export interface IQuestion {
  statement: string,
  isMandatory?: boolean,
  answers?: Array<IAnswer>
}
export default async (QuizId: number, question: IQuestion) => {
  let createdAnswers = [];

  const { statement, isMandatory, answers } = question;
      const createdQuestion = await Question.create({
        QuizId,
        statement,
        isMandatory
      })
      if (answers) {
        const QuestionId = createdQuestion.dataValues.id
        for (let i = 0; i < answers.length; i++) {
          const answer = answers[i];
          const createdAnswer = await createAnswer(QuestionId, answer);
          createdAnswers.push(createdAnswer)
        }
      }
      return {
        question: createdQuestion.dataValues,
        answers: createdAnswers
      }
}