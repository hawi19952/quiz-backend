import { Request, Response } from "express";
import createQuestion from "../functions/create.question.js";
import reportError from "../../../helpers/report.error.js";
import sendResponse from "../../../helpers/send.response.js";

export default async (req: Request, res: Response) => {
  const { quizId, statement, isMandatory, answers } = req.body;
  const question = {
    statement,
    isMandatory,
    answers
  }
  const createdQuestion = await createQuestion(quizId, question);
  
  if(!createdQuestion) {
    return reportError("Couldn't create question", 500, res);
  }
  return sendResponse(createdQuestion, res);
}