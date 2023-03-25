import Joi, { ObjectSchema } from "joi";
import reportError from "./report.error.js";
import { NextFunction, Request, Response } from "express";


export default (validator: ObjectSchema<any>) => {
  return async function ( req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.body);
      
      const validated = await validator.validateAsync(req.body);
      console.log(validated);
      
      if(!validated) {
        throw new Error("schema is not matched");
      }
      next();
    } catch (error) {
      reportError(error, 200, res)
    }  
  }
}