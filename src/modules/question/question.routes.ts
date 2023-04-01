import { Application } from "express";
import controllers from "./controllers/index.js";
import bodyParser from "../../helpers/body.parser.js";
import { validateBody, validateParams } from "../../helpers/validate.request.js";
import questionValidator, { questionIdValidation, questionUpdateValidator } from "./interface/question.validator.js";
import { quizIdValidation } from "../quiz/interface/quiz.validator.js";


const route = '/api/question';

export default (app: Application) => {
  app.get(`${route}/:id` ,validateParams(questionIdValidation) ,controllers.getQuestion);
  app.post(`${route}`, bodyParser, validateBody(questionValidator) ,controllers.postQuestion);
  app.put(`${route}/:id`, bodyParser, validateParams(quizIdValidation) ,validateBody(questionUpdateValidator), controllers.putQuestion);
}