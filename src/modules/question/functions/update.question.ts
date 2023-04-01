import { Question } from "../../../helpers/database/models.js"

interface IUpdateQuestion {
  quizId?: number | string,
  isMandatory?: boolean,
  statement?: string
}

export default async (questionId: number | string, existingQuestion: any, update: IUpdateQuestion) => {

  let { isMandatory, statement } = update || existingQuestion;
  let QuizId = update.quizId || existingQuestion.QuizId;

  const affectedCount = await Question.update(
    {
      QuizId,
      isMandatory,
      statement
    },
    {
      where: {id: questionId}
    }
  );
  if(affectedCount[0] > 0) {
    return {
      message: 'Preview of question after update',
      QuizId,
      isMandatory,
      statement
    }
  }
}