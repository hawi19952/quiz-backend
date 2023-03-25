import { Request, Response } from "express";
import { ICreateQuiz } from "../interface/create.quiz.types.js";
import { Answer, Question, Quiz } from "../../../helpers/database/models.js";

export default async (req: Request, res: Response) => {
  const { title, description, isPublished, questions } = req.body;
  const quizObject: ICreateQuiz = {
    title,
    description,
    isPublished,
    questions
  }

  const createdQuiz = await Quiz.create({
    title,
    description,
    isPublished
  });

  const quizId = createdQuiz.dataValues.id
  

  if (questions) {
    for (let i = 0; i < questions.length; i++) {
      const question = questions[i];
      const { statement, isMandatory, answers } = question;
      const createdQuestion = await Question.create({
        quizId,
        statement,
        isMandatory
      })
      if (answers) {
        const questionId = createdQuestion.dataValues.id
        for (let i = 0; i < answers.length; i++) {
          const answer = answers[i];
          const { statement, isCorrect } = answer;
          await Answer.create({
            questionId,
            statement,
            isCorrect
          })
        }
      }
    }
  }
  
  console.log(quizObject);
  
  res.status(200).send('it works')
}