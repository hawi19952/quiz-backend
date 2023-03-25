import { Request, Response } from "express";
import createQuiz from "../functions/create.quiz.js";

export default async (req: Request, res: Response) => {
  
  const data = await createQuiz(req);
  
  return res.status(200).send(data)
}