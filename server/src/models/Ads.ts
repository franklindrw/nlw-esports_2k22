import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function buscaAdPorId(gameId: string){ 
    return prisma.aD.findMany({
    select:{
        id: true,
        name: true,
        weekDays: true,
        useVoiceChannel: true,
        yearsPlaying: true,
        hourStart: true,
        hourEnd: true
    },
    where:{
        gameId,
    },
    orderBy:{
        createdAt: 'desc'
    }
})};

export const ads = prisma.aD.findMany();

export function buscaDiscordPorId(id: string){
    return prisma.aD.findMany({
        select:{
            discord: true
        },
        where:{
            id
        }
    })
}