import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();
import connectDB from "./config/db.js";
import productRoute from "./routes/productRoute.js";
import userRoute from "./routes/userRoute.js";
const port = process.env.PORT || 5000;

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
connectDB(); //Connection to MONGODB

const app = express();

app.use(cors());
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

app.use(notFound); //  any request that does not match a defined route will be handled by the notFound middleware,
app.use(errorHandler); // This middleware is responsible for handling errors that occur during the processing of a request or in any previous middleware.
app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`.bgGreen.black);
});
