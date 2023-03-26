import { Application } from "express"
import controllers from "./controllers/index.js";
import isValid from "../../helpers/isValid.js";
import quizValidator from "./interface/quiz.validator.js";
import bodyParser from "../../helpers/body.parser.js";

export default (app: Application ) => {
  app.post('/api/quiz', bodyParser, isValid(quizValidator), controllers.createQuiz);
}