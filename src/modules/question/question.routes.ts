import { Application } from "express";
import controllers from "./controllers/index.js";

export default (app: Application) => {
  app.post('/api/question', /**isValid(questionSchema), */controllers.postQuestion);
}