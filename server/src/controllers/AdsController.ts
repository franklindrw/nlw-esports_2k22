import { ads, buscaAdPorId, buscaDiscordPorId } from '../models/Ads';

class AdController {

    static listarAds = async (req: any, res: any) => {
        const data = await ads;
        res.status(200).json(data);
    }

    static listarAdsPorGame = async (req: any, res: any) => {
        const id = req.params.id;
        const data = await buscaAdPorId(id);
        res.status(200).json(data);
    }

    static adicionarAds = (req: any, res: any) => {
        const reqBody = req.params.data;
        res.status(201).json('Anuncio criado');
    }

    static buscarDiscordPeloAdsId = async (req: any, res: any) => {
        const id = req.params.id;
        const data = await buscaDiscordPorId(id);
        res.status(200).json(data);
    }
}

export default AdController;