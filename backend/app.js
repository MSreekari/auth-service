const express = require("express");
const app = express();
const userRoutes = require("./src/routes/user.routes");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/users", userRoutes); // mount user routes

// Root route
app.get("/", (req, res) => {
  res.send("API is running!");
});

module.exports = app;
