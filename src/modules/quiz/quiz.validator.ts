import Joi from "joi";

export default Joi.object().keys({
  title: Joi.string().min(1).required(),
  description: Joi.string(),
  isPublished: Joi.boolean().default(false)
})
