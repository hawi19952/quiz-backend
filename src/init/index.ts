import { Application } from "express";
import initExpress from "./init.express.js";
import initDatabase from "./init.database.js";
import routes from "../modules/default/routes.js";

export default (app: Application) => {
  initExpress(app);
  routes(app);
  initDatabase();
}