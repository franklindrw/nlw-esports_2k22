import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

export default function CreateAdBanner() {
    return (
        <div className="pt-1 bg-gradient-text self-stretch rounded-lg mt-8 overflow-hidden">
            <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
                <div>
                    <strong className="text-2xl text-white font-black block">
                        Não encontrou se duo?
                    </strong>
                    <span className="text-zinc-400">
                        Publique um anúncio para encontrar novos players!
                    </span>
                </div>
                <Dialog.Trigger className="py-3 px-4 bg-violet-500 hover:bg-violet-700 cursor-pointer text-write rounded text-white flex items-center gap-3">
                    <MagnifyingGlassPlus size={24} />
                    Públicar Anúncio
                </Dialog.Trigger>
            </div>
        </div>
    );
}
