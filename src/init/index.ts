import { Application } from "express";
import initExpress from "./init.express.js";
import initDatabase from "./init.database.js";

export default (app: Application) => {
  initExpress(app);
  initDatabase();
}