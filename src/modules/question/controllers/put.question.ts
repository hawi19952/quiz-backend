import { Request, Response } from "express";
import { Question } from "../../../helpers/database/models.js";
import reportError from "../../../helpers/report.error.js";
import sendResponse from "../../../helpers/send.response.js";
import updateQuestion from "../functions/update.question.js";

export default async (req: Request, res: Response) => {
  const { id } = req.params;
  let { quizId, isMandatory, statement } = req.body;

  const existingQuestion: any = await Question.findOne({ where: { id }});

  if(!existingQuestion) {
    return reportError(`No question is found with the id: ${id}`, 404, res);
  }

  const updates = {
    quizId,
    isMandatory,
    statement
  }
  
  const questionAfterUpdate = await updateQuestion(id, existingQuestion, updates);
  if(!questionAfterUpdate) {
    return reportError(`Couldn't create the question with data:\n ${updates}`, 500, res);
  }
  return sendResponse(questionAfterUpdate, res); 
}
