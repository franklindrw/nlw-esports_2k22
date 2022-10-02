import { allGames, buscaGamePorId } from "../models/Games";

class GameController {

    static listarGames = async (req: any, res: any) => {
        const data = await allGames;
        res.status(200).json(data);
    }

    static listarGamePorId = async(req: any, res: any) => {
        const id = req.params.id;
        const data = await buscaGamePorId(id);
        res.status(200).json(data);
    }

}

export default GameController;