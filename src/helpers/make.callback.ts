import { NextFunction, Request, Response } from "express"
import reportError from "./report.error.js";

export default (providedFunction: Function) => {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      await providedFunction(req, res, next);
    } catch (error) {
      reportError(error, 400, res);
    }
  }
}