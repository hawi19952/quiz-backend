import { Response } from "express";
import { IHttpResponse } from "../interfaces/https.response.js";

export default (error: Error | any, errorCode: number ,res?: Response) => {
  console.log(error);
  if(res) {
    const errorResponse: IHttpResponse = {
      success: false,
      errors: [errorCode], //BUG:define #2 #1 error codes
      data: {error}
    }
    return res.status(404).send(errorResponse);
  }
  
}