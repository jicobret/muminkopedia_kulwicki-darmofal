
import {Request, Response} from 'express'
import {addCharacter, fetchCharacters} from "../services/CharacterService"
import {deleteCharacter, updateCharacter} from "../repositories/CharacterRepository";

export async function fetchCharactersController(req: Request, res: Response) {
    try {
        const characters = await fetchCharacters()
        res.status(200).json(characters)
    } catch (e) {
        res.status(500).json({error: e})
    }
}

export async function addCharacterController(req: Request, res: Response) {
    try {

        const character = await addCharacter(req.body)
        res.status(200).json(
            {
                message: "Character added successfully",
                newCharacter: character
            }
        )

    } catch (e) {
        res.status(500).json({error: e})
    }
}

export async function updateCharacterController(req: Request, res: Response) {
    try {

        const id = req.params.id.toString()

        const character = await updateCharacter(id, req.body)

        res.status(200).json(
            {
                message: "Character updated",
                newCharacter: character
            }
        )
    } catch (e) {
        res.status(500).json({error: e})
    }
}

export async function deleteCharacterController(req: Request, res: Response) {
    try {

        const id = req.params.id.toString()
        const character = await deleteCharacter(id)

        res.status(200).json({
            message: "Character deleted",
            newCharacter: character
        })

    } catch (e) {
       res.status(500).json({error: e})
    }
}