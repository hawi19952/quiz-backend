import Joi from "joi";

export const answerValidation = Joi.object().keys({
  statement: Joi.string(),
  isCorrect: Joi.boolean().default(false)
})


const questionValidation = Joi.object().keys({
  statement: Joi.string().required(),
  isMandatory: Joi.boolean().default(false),
  answers: Joi.array().items(answerValidation)
})


export default Joi.object().keys({
  title: Joi.string().min(1).required(),
  description: Joi.string(),
  isPublished: Joi.boolean().default(false),
  questions: Joi.array().items(questionValidation)
})


export const quizIdValidation = Joi.object().keys({
  id: Joi.number().min(1).required()
})