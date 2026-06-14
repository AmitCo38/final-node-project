import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mainRoutes from "./routes/index.js";
import { logger } from "./utils/logger.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/api", mainRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});