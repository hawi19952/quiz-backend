import Joi from "joi";

export default Joi.object().keys({
  title: Joi.string().min(1).required(),
  description: Joi.string(),
  isPublished: Joi.boolean().default(false),
  questions: Joi.array().items(
    Joi.object().keys({
      statement: Joi.string().required(),
      isMandatory: Joi.boolean().default(false),
      answers: Joi.array().items(
        Joi.object().keys({
          statement: Joi.string(),
          isCorrect: Joi.boolean().default(false)
        })
      )
    })
  )
})
