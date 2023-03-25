import { Application } from "express";
import modules from "../modules/index.js";

export default (app: Application) => {
  modules(app);
}