import ArtModel, {IArtifact} from "../models/Artifact";

export async function getAllArtifacts(): Promise<IArtifact[]> {

    return ArtModel.find()
}

export async function createArtifact(artifact: IArtifact): Promise<IArtifact> {

    const newCharacter = new ArtModel(artifact)
    return newCharacter.save();
}

export async function updateArtifact(id: number, uptArtifact: IArtifact): Promise<IArtifact | null> {
    return ArtModel.findByIdAndUpdate(id, uptArtifact, {returnDocument: "after"})
}

export async function deleteArtifact(id: number): Promise<IArtifact | null> {
    return ArtModel.findByIdAndDelete(id)
}