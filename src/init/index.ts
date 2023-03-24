import { Application } from "express";
import initExpress from "./init.express";

export default (app: Application) => {
  initExpress(app);
}