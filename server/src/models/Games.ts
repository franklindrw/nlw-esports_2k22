import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const allGames = prisma.gAME.findMany({
    include:{
        _count:{
            select:{
                ads: true
            }
        }
    }
});

export function buscaGamePorId(idGame: string){
    return prisma.gAME.findMany({
        where:{
            id: idGame
        },
        include:{
            _count:{
                select:{
                    ads: true
                }
            }
        }
    });
}

