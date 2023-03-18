import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";
//we use type = module concept in this we use import and export keyword like in  react js instead of require()
// const express = require("express");
// const colors = require("colors");

// configure the dotenv
dotenv.config();

// database config

connectDB();

// rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);

/// rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to E-Commerce MERN Stack App by MR. Suraj Patel </h1>");
});

app.post("/registerSample", (req, res) => {
  try {
    console.log("Register backend is working");
    res.send({
      message: "Working of registration perfectly",
      success: true,
    });
  } catch (error) {
    res.status(404).send({
      error: error,
      message: "Not register working ",
    });
  }
});
const PORT = 8080;
app.listen(PORT, () => {
  console.log(
    `server is running on ${process.env.PORT} and mod is ${process.env.MOD_PORT} `
      .bgBlue.white
  );
});
