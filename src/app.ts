import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import {connectDB} from "./config/db";
import artifactRoutes from "./routes/ArtifactRoutes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

connectDB();
app.use("/artifacts", artifactRoutes);

app.get("/", (req, res) => {
    res.json({ message: "API Express + TypeScript działa!" });
});

export default app;