import express from "express";
import AdController from "../controllers/AdsController";

const router = express.Router();

router
    .get('/ads', AdController.listarAds)
    .post('/ads', AdController.adicionarAds)
    .get('/games/:id/ads', AdController.listarAdsPorGame)
    .get('/ads/:id/ads', AdController.buscarDiscordPeloAdsId)

export default router;