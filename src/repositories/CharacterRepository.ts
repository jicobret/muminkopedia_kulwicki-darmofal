
import CharModel, {ICharacter} from "../models/Character";
import Character from "../models/Character";

export async function getAllCharacters(): Promise<ICharacter[]> {

    return CharModel.find()
}

export async function createCharacter(character: ICharacter): Promise<ICharacter> {

    const newCharacter = new CharModel(character)
    return newCharacter.save();
}

export async function updateCharacter(id: number, uptCharacter: ICharacter): Promise<ICharacter | null> {
    return Character.findByIdAndUpdate(id, uptCharacter, {returnDocument: "after"})
}