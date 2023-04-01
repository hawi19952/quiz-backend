import { Request, Response } from "express";
import reportError from "../../../helpers/report.error.js";
import sendResponse from "../../../helpers/send.response.js";
import getQuestion from "../functions/get.question.js";

export default async (req: Request, res: Response) => {
  const { id } = req.params;

  const foundQuestion = await getQuestion(id);

  if(!foundQuestion) {
    return reportError(`No question found with the id: ${id}`, 404, res);
  }
  return sendResponse(foundQuestion, res);
}