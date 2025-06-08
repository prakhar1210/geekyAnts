import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// Route imports
import authRoutes from "./routes/authRoutes.js";
// import engineerRoutes from "./routes/engineerRoutes.js";
// import projectRoutes from "./routes/projectRoutes.js";
// import assignmentRoutes from "./routes/assignmentRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
// app.use("/api/engineers", engineerRoutes);
// app.use("/api/projects", projectRoutes);
// app.use("/api/assignments", assignmentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
