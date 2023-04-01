import { Request, Response } from "express";
import { Question } from "../../../helpers/database/models.js";
import reportError from "../../../helpers/report.error.js";
import sendResponse from "../../../helpers/send.response.js";

export default async (req: Request, res: Response) => {
  const { id } = req.params
  let question: any = await Question.findOne({ where: { id }});

  if(!question) {
    return reportError(`No question is found with the id: ${id}`, 404, res);
  }

  let { quizId } = req.body || question.QuizId;
  let { isMandatory, statement } = req.body || question;

  const affectedCount = await Question.update(
    {
      QuizId: quizId,
      isMandatory,
      statement
    },
    {
      where: {id}
    },
  )
  
  if(affectedCount[0] < 1) {
    return reportError(`No update was done on question with id: ${id}`, 304, res)
  }

  return sendResponse(affectedCount, res); 
}

// question = 3