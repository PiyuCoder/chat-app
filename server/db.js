import mongoose from "mongoose";

export const Connection = () => {
  mongoose.connect(process.env.MONGO_URL);
  console.log("Connected to db");
};
