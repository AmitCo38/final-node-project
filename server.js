import express from "express";
import cors from "cors";
import mainRoutes from "./routes/index.js";
import { logger } from "./utils/logger.js";
import { config } from "./config/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/api", mainRoutes);

app.use((req,res)=>{
    res.status(404).json({
        message:"ROUTE NOT FOUND TRY SOMETHING ELSE :("
    });
});

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});