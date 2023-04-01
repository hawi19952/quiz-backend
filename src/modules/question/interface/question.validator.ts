import Joi from "joi";
import { answerValidation } from "../../quiz/interface/quiz.validator.js";

export default Joi.object().keys({
  quizId: Joi.string().min(1).required(),
  statement: Joi.string().required(),
  isMandatory: Joi.boolean().default(false),
  answers: Joi.array().items(answerValidation)
})

export const questionIdValidation = Joi.object().keys({
  id: Joi.number().min(1).required()
});