import express from "express";
import dotenv from "dotenv";
import colors from "colors";
dotenv.config();
import connectDB from "./config/db.js";
import productRoute from "./routes/productRoute.js";
const port = process.env.PORT || 5000;

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
connectDB(); //Connection to MONGODB

const app = express();

app.get("/", (req, res) => {
  res.send(`Server is ready`);
});

app.use("/api/products", productRoute);

app.use(notFound); // this will be the last middleware
app.use(errorHandler); // this will be the last middleware
app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`.bgGreen.black);
});
