import express, { Application } from "express"
import controllers from "./controllers/index.js";
import isValid from "../../helpers/isValid.js";
import quizValidator from "./interface/quiz.validator.js";
const jsonParser = express.json();

export default (app: Application ) => {
  app.post('/api/quiz', jsonParser, isValid(quizValidator), controllers.createQuiz);
}