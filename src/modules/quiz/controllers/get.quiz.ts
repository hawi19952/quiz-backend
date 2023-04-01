import { Request, Response } from "express";
import reportError from "../../../helpers/report.error.js";
import sendResponse from "../../../helpers/send.response.js";
import getQuizById from "../functions/get.quiz.by.id.js";

export default async (req: Request, res:Response) => {
  const { id } = req.params; 

  const foundQuiz = await getQuizById(id);

  if(!foundQuiz) {
    return reportError(`No Quiz Found with the id : ${id}`, 2, res)
  }

  return sendResponse(foundQuiz, res)
}