import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const userServ = "gnani";
const passwordSERV = "1234";

app.post("/Login", (req, res) => {
  const { user, password } = req.body;

  if (user === userServ && password === passwordSERV) {
    res.status(201).json({ success: true, message: "Login Success" });
  }
});

app.listen(PORT, () => {
  console.log("Backend applicationis listening at the port:", PORT);
});
