import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI; // Use your actual connection string

if (!MONGODB_URI) {
  throw new Error("MongoDB URI is not defined in environment variables.");
}

const dbConnect = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      return;
    }
    await mongoose.connect(MONGODB_URI);
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
  }
};

export default dbConnect;
