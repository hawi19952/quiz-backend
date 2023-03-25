import { Application } from "express";
import quizRoutes from "./quiz/quiz.routes.js";

export default (app: Application) => {
  quizRoutes(app);
}