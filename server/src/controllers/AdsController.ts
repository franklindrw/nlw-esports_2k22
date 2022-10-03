import { ads, buscaAdPorId, buscaDiscordPorId, createAds } from '../models/Ads';

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

    static adicionarAds = async (req: any, res: any) => {

        // #swagger.tags = ['Anúncios']
        // #swagger.description = 'Endpoint para adicionar um novo anúncio.'

        const idGame = req.params.id;

        /* #swagger.parameters['addAds'] = {
            in: 'body',
            description: 'Informações do anúncio',
            required: true,
            schema: { $ref: "#/definitions/addAds" }
        */

        const reqBody = req.body;
        const create = await createAds(idGame, reqBody);
        res.status(201).json(create);
    }

    static buscarDiscordPeloAdsId = async (req: any, res: any) => {
        // #swagger.tags = ['Anúncios']
        // #swagger.description = 'Endpoint para busca o discord pelo Id do anúncio.'
        // #swagger.parameters['id'] = { description: 'Id do anúncio.', required: true }

        const id = req.params.id;
        const data = await buscaDiscordPorId(id);
        res.status(200).json(data);
    }
}

export default AdController;