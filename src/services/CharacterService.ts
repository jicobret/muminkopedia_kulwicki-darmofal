import {ICharacter} from "../models/Character";
import {createCharacter, deleteCharacter, getAllCharacters, updateCharacter} from "../repositories/CharacterRepository";

async function fetchCharacters(): Promise<ICharacter[]> {
    return await getAllCharacters()
}

async function addCharacter(character: ICharacter): Promise<ICharacter> {

    if(!character) {
        throw new Error("Character not found");
    } else if(!character.name || !character.description || !character.species) {
        throw new Error("Some required information is missing");
    }

    return await createCharacter(character)
}

async function uptCharacter(id: number, uptCharacter: Partial<ICharacter>): Promise<ICharacter> {

    const upChar = await updateCharacter(id, uptCharacter)

    if(!upChar) {
        throw new Error("Character not found");
    }

    return upChar;
}

async function delCharacter(id: number): Promise<ICharacter | null> {

    const delChar = deleteCharacter(id)

    if(!delChar) {
        throw new Error("Character not found");
    }

    return await delChar;
}