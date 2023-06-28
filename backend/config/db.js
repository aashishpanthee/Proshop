import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`.bgMagenta);
  } catch (error) {
    console.log(`Error: ${error.message}`.bgRed.white);
    process.exit(1);
  }
};
export default connectDB;
