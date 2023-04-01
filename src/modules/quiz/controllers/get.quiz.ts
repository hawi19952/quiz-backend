import { Request, Response } from "express";
import reportError from "../../../helpers/report.error.js";
import { Answer, Question, Quiz, sequelize } from "../../../helpers/database/models.js";
import sendResponse from "../../../helpers/send.response.js";

export default async (req: Request, res:Response) => {
  const { id } = req.params; 

  const foundQuiz = await Quiz.findOne(
    {
      where: {
        id
      },
      include: {
        model: Question,
        include: [{
          model: Answer
        }]
      }
    }
  )

  if(!foundQuiz) {
    return reportError(`No Quiz Found with the id : ${id}`, 2, res)
  }

  return sendResponse(foundQuiz, res)
}