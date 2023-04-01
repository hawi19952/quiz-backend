import { Application } from "express"
import controllers from "./controllers/index.js";
import quizValidator, { quizIdValidation } from "./interface/quiz.validator.js";
import bodyParser from "../../helpers/body.parser.js";
import { validateBody, validateParams } from "../../helpers/validate.request.js";


export default (app: Application ) => {
  app.post('/api/quiz', bodyParser, validateBody(quizValidator), controllers.createQuiz);
  app.get('/api/quiz/:id', bodyParser, validateParams(quizIdValidation), controllers.getQuiz);
}