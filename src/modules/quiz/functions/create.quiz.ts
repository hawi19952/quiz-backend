import { Quiz } from "../../../helpers/database/models.js";
import { Request } from 'express';
import createQuestion from "../../question/functions/create.question.js";
import { IQuestion } from "../../question/functions/create.question.js";


export interface ICreateQuiz {
  title: string,
  description?: string,
  isPublished?: boolean,
  questions?: Array<IQuestion>
}

export default async (req: Request) => {
  let createdQuestions = [];

  const { title, description, isPublished, questions } = req.body;

  const createdQuiz = await Quiz.create({
    title,
    description,
    isPublished
  });

  const quizId = createdQuiz.dataValues.id
  
  if (questions) {
    for (let i = 0; i < questions.length; i++) {
      const question = questions[i];
      const createdQuestion = await createQuestion(quizId, question)
      createdQuestions.push(createdQuestion);
    }
  }
  return {
    quiz: createdQuiz.dataValues,
    questions: createdQuestions
  }
}