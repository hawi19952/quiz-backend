import { Answer, Question } from "../../../helpers/database/models.js"

export default async (questionId: number | string) => {
  const foundQuestion = await Question.findOne(
    {
      where: { id: questionId },
      include: {
        model: Answer
      }
  })
  return foundQuestion;
}