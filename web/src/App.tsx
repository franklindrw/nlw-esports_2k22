import "./styles/main.css";
import Logo from "./assets/logo_esports.svg";
import GameBanner from "./components/GameBanner";
import CreateAdBanner from "./components/CreateAdBanner";
import { useEffect, useState } from "react";
import api from "./config/apiConfig";
import * as Dialog from "@radix-ui/react-dialog";
import CreateAdModal from "./components/CreateAdModal";

interface Game {
    id: string;
    title: string;
    bannerUrl: string;
    _count: {
        ads: number;
    };
}

export default function App() {
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        api.get("games").then(({ data }) => {
            setGames(data);
            console.log(data);
        });
    }, [3000]);

    return (
        <div className="max-w-[1280px] mx-auto flex flex-col items-center my-20">
            <img src={Logo} />

            <h1 className="text-6xl text-white font-black mt-20">
                Seu{" "}
                <span className="text-transparent bg-gradient-text bg-clip-text">
                    duo
                </span>{" "}
                está aqui!
            </h1>

            <div className="grid grid-cols-6 gap-6 mt-16">
                {games?.map((game, index) => (
                    <GameBanner
                        key={index}
                        bannerUrl={game.bannerUrl}
                        title={game.title}
                        adsCount={game._count.ads}
                    />
                ))}
            </div>
            <Dialog.Root>
                <CreateAdBanner />
                <CreateAdModal />
            </Dialog.Root>
        </div>
    );
}
