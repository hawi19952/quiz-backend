import { Request, Response } from "express";
import { Question } from "../../../helpers/database/models.js";
import { Op } from "sequelize";

export default async (req: Request, res: Response) => {
  const { quizId, questionId } = req.body;

  if(questionId) {
    const foundQuestion = await Question.findOne({
      where: {
        id: questionId
      }
    })
    return res.status(200).send(foundQuestion)
  }
  const foundQuestions = await Question.findAll({
    where: quizId
  })
  return res.status(200).send(foundQuestions);
}