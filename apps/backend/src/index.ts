import express from "express";
import serverless from "serverless-http";
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello from Turbo + Express + Vercel!" });
});

export default serverless(app);
