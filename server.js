const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3000;

//  Import route files
const authRoutes = require("./server/routes/auth");
const paymentRoutes = require("./server/routes/payment");
const leaderboardRoutes = require("./server/routes/leaderboard");
const expenseRoutes = require("./server/routes/expenses");
const passwordRoutes = require("./server/routes/password");

//  Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(morgan("dev"));

//  Serve signup page at root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "signup-page.html"));
});
app.get("/logout", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "logout.html"));
});

//  Mount all routes
app.use(authRoutes);
app.use(paymentRoutes);
app.use("/leaderboard", leaderboardRoutes);
app.use(expenseRoutes);
app.use("/password", passwordRoutes);

//  Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

//  Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(` Server running at http://localhost:${PORT}/`);
});
