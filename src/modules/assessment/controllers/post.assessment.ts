import { Request as req, Response as res } from "express";
import { Assessment, Response  } from "../../../helpers/database/models.js";

export default async (req: req, res: res) => {
  let correctAnswers = 0;
  const { quizId, answers } = req.body;

  const createdAssessment = await Assessment.create({ quizId });
  const assessmentId = createdAssessment.dataValues.id;
  let createdResponses = [];
  for (let i = 0; i < answers.length; i++) {
    const answer = answers[i];
    if(answer.isCorrect) {
      correctAnswers = correctAnswers+1;
    }
    const createdResponse = await Response.create({
      answerId: answer.id,
      isCorrect: answer.isCorrect,
      assessmentId
    })
    createdResponses.push(createdResponse.dataValues);
  }

  const data = {
    createdAssesment: createdAssessment.dataValues,
    correctAnswers,
    createdResponses,
  }
  return res.status(200).send(data)
}