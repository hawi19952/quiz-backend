import { Application } from "express";
import controllers from "./controllers/index.js";

export default (app: Application) => {
  app.post('/api/answer', /**isValid(answerSchema) ,*/ controllers.postAnswer);
}