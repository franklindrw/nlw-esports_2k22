import express from "express";
import GameController from "../controllers/GamesController";

const router = express.Router();

router
    .get('/games', GameController.listarGames)
    .get('/games/:id', GameController.listarGamePorId)

export default router;