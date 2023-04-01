import { Application } from "express"
import controllers from "./controllers/index.js";
import quizValidator, { quizIdValidation } from "./interface/quiz.validator.js";
import bodyParser from "../../helpers/body.parser.js";
import { validateBody, validateParams } from "../../helpers/validate.request.js";

const route = '/api/quiz'

export default (app: Application ) => {
  app.post(`${route}`, bodyParser, validateBody(quizValidator), controllers.createQuiz);
  app.get(`${route}/:id`, bodyParser, validateParams(quizIdValidation), controllers.getQuiz);
}