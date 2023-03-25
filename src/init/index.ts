import { Application } from "express";
import initExpress from "./init.express.js";
import initDatabase from "./init.database.js";
import initModules from "./init.modules.js";

export default (app: Application) => {
  initDatabase();
  initModules(app);
  initExpress(app);
}