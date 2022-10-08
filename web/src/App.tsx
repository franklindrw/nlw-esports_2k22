import "./styles/main.css";
import Logo from "./assets/logo_esports.svg";
import GameBanner from "./components/GameBanner";
import CreateAdBanner from "./components/CreateAdBanner";
import { useEffect, useState } from "react";
import api from "./config/apiConfig";
import * as Dialog from "@radix-ui/react-dialog";
import { GameController } from "phosphor-react";
import Input from "./components/FormInput";

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

                <Dialog.Portal>
                    <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

                    <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
                        <Dialog.Title className="text-3xl font-black">
                            Publique um Anúcio
                        </Dialog.Title>

                        <form className="mt-8 flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="game" className="font-semibold">
                                    Qual o game?
                                </label>
                                <Input
                                    id="game"
                                    placeholder="Selecione o game que quer jogar"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="font-semibold">
                                    Seu nome (nickname)
                                </label>
                                <Input
                                    id="name"
                                    placeholder="Como te chamam dentro do game"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="yearsPlaying"
                                        className="font-semibold"
                                    >
                                        Joga há quantos anos?
                                    </label>
                                    <Input
                                        id="yearsPlaying"
                                        placeholder="tudo bem ser zero"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="discord"
                                        className="font-semibold"
                                    >
                                        Qual o seu Discord?
                                    </label>
                                    <Input
                                        id="discord"
                                        placeholder="Usuario#0000"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="weekDays">
                                        Quando costuma jogar?
                                    </label>
                                </div>
                                <div className="flex flex-col gap-2 flex-1">
                                    <label htmlFor="hourStart">
                                        Qual o horário do dia?
                                    </label>
                                    <div className="grid grid-cols-2 gap-2">
                                        <Input
                                            id="hourStart"
                                            type="time"
                                            placeholder="de"
                                        />
                                        <Input
                                            id="hourEnd"
                                            type="time"
                                            placeholder="até"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-2 flex gap-2 text-sm">
                                <Input type="checkbox" /> Costumo me conectar ao
                                chat de voz
                            </div>

                            <footer className="mt-4 flex justify-end gap-4">
                                <Dialog.Close
                                    type="button"
                                    className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
                                >
                                    Cancelar
                                </Dialog.Close>
                                <button
                                    type="submit"
                                    className="flex items-center bg-violet-500 px-5 h-12 gap-3 rounded-md font-semibold hover:bg-violet-600"
                                >
                                    <GameController size={24} />
                                    Encontrar Duo
                                </button>
                            </footer>
                        </form>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    );
}
