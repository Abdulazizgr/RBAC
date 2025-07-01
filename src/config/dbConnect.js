import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_URI)
      .then(() => {
        console.log("Database connected successfully");
      })
      .catch((error) => {
        console.error("Database connection failed:", error);
      });
  } catch (error) {
    console.error("Database connection error:", error);
  }
};
