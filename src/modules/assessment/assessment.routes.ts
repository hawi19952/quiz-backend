import { Application } from "express";
import controllers from "./controllers/index.js";
import makeCallback from "../../helpers/make.callback.js";
import bodyParser from "../../helpers/body.parser.js";

export default ( app: Application ) => {
  app.post('/api/assessment', bodyParser,/**isValid(assessmentSchema), */ makeCallback(controllers.postAssessment))
}