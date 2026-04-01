import {ICharacter} from "../models/Character";
import {createCharacter, deleteCharacter, getAllCharacters, updateCharacter} from "../repositories/CharacterRepository";

export async function fetchCharacters(): Promise<ICharacter[]> {
    return await getAllCharacters()
}

export async function addCharacter(character: ICharacter): Promise<ICharacter> {

    if(!character) {
        throw new Error("Character not found");
    } else if(!character.name || !character.description || !character.species) {
        throw new Error("Some required information is missing");
    }

    return await createCharacter(character)
}

export async function uptCharacter(id: string, uptCharacter: Partial<ICharacter>): Promise<ICharacter> {

    const upChar = await updateCharacter(id, uptCharacter)

    if(!upChar) {
        throw new Error("Character not found");
    }

    return upChar;
}

export async function delCharacter(id: string): Promise<ICharacter | null> {

    const delChar = deleteCharacter(id)

    if(!delChar) {
        throw new Error("Character not found");
    }

    return await delChar;
}