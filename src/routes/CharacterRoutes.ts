import { Router } from "express";
import {
    addCharacterController,
    deleteCharacterController,
    fetchCharactersController,
    updateCharacterController
} from "../controllers/CharacterController"

const router = Router()

router.get("/", fetchCharactersController)
router.post("/", addCharacterController);
router.put("/:id", updateCharacterController);
router.delete("/:id", deleteCharacterController);

export default router;