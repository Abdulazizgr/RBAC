import express from "express";
import { configDotenv } from "dotenv";
import { dbConnect } from "./config/dbConnect.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

configDotenv();
// Connect to the database
await dbConnect();

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
