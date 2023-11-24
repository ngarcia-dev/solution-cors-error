import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ['GET']
  })
);

app.delete("/ping", async (req, res) => {
  res.send("pong");
});

app.listen(3000);

console.log("server on port 3000");
