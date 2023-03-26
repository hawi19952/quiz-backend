import { Application } from "express";
import controllers from "./controllers/index.js";
import bodyParser from "../../helpers/body.parser.js";


const route = '/api/question';
export default (app: Application) => {
  app.get(route, bodyParser,/**isValid, */ controllers.getQuestion);
  app.post(route, bodyParser, /**isValid(questionSchema), */controllers.postQuestion);
}