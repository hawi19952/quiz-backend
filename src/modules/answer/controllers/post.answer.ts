import { Request, Response } from 'express'
import createAnswer from "../functions/create.answer.js";

export default async (req: Request, res: Response) => {
  const { questionId, answer } = req.body;
  const createdAnswer = await createAnswer(questionId, answer)
  return res.send(createdAnswer);
}