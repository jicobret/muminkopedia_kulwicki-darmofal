import { Router } from "express";
import {getAllArtifactsController, createArtifactController, updateArtifactController, deleteArtifactController} from "../controllers/ArtifactController";

const router = Router();

router.get("/", getAllArtifactsController);
router.post("/", createArtifactController);
router.put("/:id", updateArtifactController);
router.delete("/:id", deleteArtifactController);

export default router;