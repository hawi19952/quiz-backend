import { Application } from "express";
import makeCallback from "../../helpers/make.callback.js";
import { controllers } from "./controllers/index.js";


export default (app: Application) => {
  app.get('/api/all/', makeCallback(controllers.createQuiz));
}