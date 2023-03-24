import { Application } from "express";
import initExpress from "./init.express.js";

export default (app: Application) => {
  initExpress(app);
}