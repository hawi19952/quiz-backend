import { Application } from "express";
import quizRoutes from "./quiz/quiz.routes.js";
import questionRoutes from "./question/question.routes.js";
import answerRoutes from "./answer/answer.routes.js";

export default (app: Application) => {
  quizRoutes(app);
  questionRoutes(app);
  answerRoutes(app);
}