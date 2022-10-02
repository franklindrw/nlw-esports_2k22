import express from "express";
import games from "./gamesRoutes";
import ads from "./adsRoutes";

const routes = (app: express.Application) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "NLW e-sports 2k22"});
    });

    app.use(
        express.json(),
        games,
        ads
    );
}

export default routes;