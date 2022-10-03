import express from "express";
import games from "./gamesRoutes";
import ads from "./adsRoutes";

const routes = (app: express.Application) => {
    app.route('/').get((req, res) => {
        //#swagger.ignore = true
        res.status(200).send({titulo: "NLW e-sports 2k22"});
    });
    app.use(express.json());
    app.use(ads);
    app.use(games);
}

export default routes;