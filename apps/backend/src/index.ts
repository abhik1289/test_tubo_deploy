// console.log("HELLO");

import express, { Request, Response } from "express";
// import { NextRequest } from "express";
const app = express();
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
     res.json({ message: "Hello" })
})