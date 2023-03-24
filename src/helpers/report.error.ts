import { Response } from "express";
import { IHttpResponse } from "../interfaces/https.response.js";

export default (error: Error, res?: Response) => {
  console.log(error);
  if(res) {
    const errorResponse: IHttpResponse = {
      success: false,
      error: [1], //BUG:define #2 #1 error codes
      data: {}
    }
    res.status(404).send(errorResponse);
  }
  
}