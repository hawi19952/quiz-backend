import { Request, Response } from "express";
import createQuestion from "../functions/create.question.js";

export default async (req: Request, res: Response) => {
  const { quizId, question } = req.body;
  const createdQuestion = await createQuestion(quizId, question);
  return createdQuestion;
}