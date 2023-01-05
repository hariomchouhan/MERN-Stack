import { processFactorial, processSum } from "../Controllers/NumberController.js";
import express from "express";

const numberRouter = express.Router();

numberRouter.post("/factorial", processFactorial);
numberRouter.post("/sum", processSum);

export default numberRouter;