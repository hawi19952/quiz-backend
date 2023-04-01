import { Response } from "express";
import { IHttpResponse } from "../interfaces/https.response.js";

export default (data: any, res: Response, statusCode?: number,) => {
  const successfulResponse: IHttpResponse = {
    success: true,
    errors: [],
    data
  };
  
  return res.status(statusCode || 200).send(successfulResponse);
}