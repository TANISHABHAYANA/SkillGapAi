const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const testRoutes = require("./routes/testRoutes");
const recommendationRoutes = require("./routes/recommendationRoutes");

dotenv.config();
connectDB();

const app = express();
app.use("/api/recommendations", recommendationRoutes);

app.use(cors());
app.use(express.json());   // VERY IMPORTANT

const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);

app.get("/", (req, res) => {
  res.send("Skill AI Platform API running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});