import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Add this middleware to parse JSON request bodies
app.use(express.json());

const userServ = "gnani";
const passwordSERV = "1234";

app.get("/", (req, res) => {
  res.json("Hello World");
});

app.post("/Login", (req, res) => {
  const { user, password } = req.body;

  if (!user) {
    return res
      .status(400)
      .json({ success: false, message: "Email is required" });
  } else if (!password) {
    return res
      .status(400)
      .json({ success: false, message: "Password is required" });
  } else if (user === userServ && password === passwordSERV) {
    return res.status(201).json({ success: true, message: "Login Success" });
  } else {
    return res
      .status(401)
      .json({ success: false, message: "Invalid credentials" });
  }
});

app.listen(PORT, () => {
  console.log("Backend application is listening at the port:", PORT);
});
