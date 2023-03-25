import { Request, Response } from "express";
import { ICreateQuiz } from "../interface/create.quiz.types.js";


export default (req: Request, res: Response) => {
  const { title, description, isPublished, questions } = req.body;
  const quizObject: ICreateQuiz = {
    title,
    description,
    isPublished,
    questions
  }
  console.log(quizObject);
  
  res.status(200).send('it works')
}