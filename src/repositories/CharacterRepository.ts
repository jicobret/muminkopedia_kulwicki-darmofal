
import CharModel, {ICharacter} from "../models/Character";

export async function getAllCharacters(): Promise<ICharacter[]> {

    return CharModel.find()
}

export async function createCharacter(character: ICharacter): Promise<ICharacter> {

    const newCharacter = new CharModel(character)
    return newCharacter.save();
}

export async function updateCharacter(id: string, uptCharacter: Partial<ICharacter>): Promise<ICharacter | null> {
    return CharModel.findByIdAndUpdate(id, uptCharacter, {returnDocument: "after"})
}

export async function deleteCharacter(id: string): Promise<ICharacter | null> {
    return CharModel.findByIdAndDelete(id)
}