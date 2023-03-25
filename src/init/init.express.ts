import { Application, json, urlencoded } from "express";
import { PORT, NODE_ENV } from "../helpers/env.js";

export default ( app: Application ) => {
  app.use(urlencoded({ extended: true}))
  app.listen(PORT, () => {
    console.log(`Server is running on ${NODE_ENV} in port ${PORT}`);
  })
}