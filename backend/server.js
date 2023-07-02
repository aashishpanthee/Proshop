import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cookieParser from "cookie-parser";
dotenv.config();
import connectDB from "./config/db.js";
import productRoute from "./routes/productRoute.js";
import userRoute from "./routes/userRoute.js";
const port = process.env.PORT || 5000;

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
connectDB(); //Connection to MONGODB

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser());

app.get("/", (req, res) => {
  s;
  res.send(`Server is ready`);
});

app.use("/api/products", productRoute);
app.use("/api/users", userRoute);

app.use(notFound); // this will be the last middleware
app.use(errorHandler); // this will be the last middleware
app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`.bgGreen.black);
});
