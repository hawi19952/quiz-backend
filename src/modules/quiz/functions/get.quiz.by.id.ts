import { Quiz, Question, Answer } from "../../../helpers/database/models.js"

export default async (quizId: number | string) => {
  const foundQuiz = await Quiz.findOne(
    {
      where: {
        id: quizId
      },
      include: {
        model: Question,
        include: [{
          model: Answer
        }]
      }
    }
  )
  return foundQuiz
}