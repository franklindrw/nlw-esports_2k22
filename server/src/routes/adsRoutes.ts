import express from "express";
import AdController from "../controllers/AdsController";

const router = express.Router();

router
    .get('/ads', AdController.listarAds)
    .post('/games/:id/ads', AdController.adicionarAds)
    .get('/games/:id/ads', AdController.listarAdsPorGame)
    .get('/ads/:id/discord', AdController.buscarDiscordPeloAdsId)

export default router;