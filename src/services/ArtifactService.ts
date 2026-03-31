import {getAllArtifacts, createArtifact, updateArtifact, deleteArtifact} from "../repositories/ArtifactRepository";
import { IArtifact } from "../models/Artifact";

export async function getArtifactsService(): Promise<IArtifact[]> {
    return getAllArtifacts();
}

export async function createArtifactService(data: IArtifact): Promise<IArtifact> {
    if (!data.owner) {
        throw new Error("Artifact does not have an owner");
    }

    if (!data.name) {
        throw new Error("Artifact is not named");
    }

    return createArtifact(data);
}

export async function updateArtifactService(id: string | string[], data: IArtifact): Promise<IArtifact | null> {
    return updateArtifact(id as any, data);
}

export async function deleteArtifactService(id: string | string[]): Promise<IArtifact | null> {
    return deleteArtifact(id as any);
}