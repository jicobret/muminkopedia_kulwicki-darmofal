import { Request, Response } from "express";
import {getArtifactsService, createArtifactService, updateArtifactService, deleteArtifactService,} from "../services/ArtifactService";

export async function getAllArtifactsController(req: Request, res: Response) {
    try {
        const artifacts = await getArtifactsService();
        res.json(artifacts);
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
}

export async function createArtifactController(req: Request, res: Response) {
    try {
        const artifact = await createArtifactService(req.body);
        res.status(201).json(artifact);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
}

export async function updateArtifactController(req: Request, res: Response) {
    try {
        const updated = await updateArtifactService(
            req.params.id,
            req.body
        );

        if (!updated) {
            return res.status(404).json({ error: "Artifact not found" });
        }

        res.json(updated);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
}

export async function deleteArtifactController(req: Request, res: Response) {
    try {
        const deleted = await deleteArtifactService(req.params.id);

        if (!deleted) {
            return res.status(404).json({ error: "Artifact not found" });
        }

        res.json({ message: "Artifact deleted" });
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
}