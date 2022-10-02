import { allGames, buscaGamePorId } from "../models/Games";

class GameController {

    static listarGames = async (req: any, res: any) => {
        // #swagger.tags = ['Games']
        // #swagger.description = 'Endpoint para obter todos os games.'
        const data = await allGames;
        res.status(200).json(data);
    }

    static listarGamePorId = async(req: any, res: any) => {
        // #swagger.tags = ['Games']
        // #swagger.description = 'Endpoint para buscar o game pelo id.'
        // #swagger.parameters['id'] = { description: 'ID do game.' }

        const id = req.params.id;
        const data = await buscaGamePorId(id);
        res.status(200).json(data);
    }

}

export default GameController;