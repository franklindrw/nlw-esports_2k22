import { ads, buscaAdPorId, buscaDiscordPorId } from '../models/Ads';

class AdController {

    static listarAds = async (req: any, res: any) => {
        // #swagger.tags = ['Anúncios']
        // #swagger.description = 'Endpoint para obter todos os anúncios.'

        const data = await ads;
        res.status(200).json(data);
    }

    static listarAdsPorGame = async (req: any, res: any) => {
        // #swagger.tags = ['Anúncios']
        // #swagger.description = 'Endpoint para listar todos os anúncios pelo id do game.'
        // #swagger.parameters['id'] = { description: 'Id do anúncio.' }

        const id = req.params.id;
        const data = await buscaAdPorId(id);
        res.status(200).json(data);
    }

    static adicionarAds = (req: any, res: any) => {
        // #swagger.tags = ['Anúncios']
        // #swagger.description = 'Endpoint para adicionar um novo anúncio.'
        const reqBody = req.params.data;
        res.status(201).json('Anuncio criado');
    }

    static buscarDiscordPeloAdsId = async (req: any, res: any) => {
        // #swagger.tags = ['Anúncios']
        // #swagger.description = 'Endpoint para busca o discord pelo Id do anúncio.'
        // #swagger.parameters['id'] = { description: 'Id do anúncio.' }

        const id = req.params.id;
        const data = await buscaDiscordPorId(id);
        res.status(200).json(data);
    }
}

export default AdController;