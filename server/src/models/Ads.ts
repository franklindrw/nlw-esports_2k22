import { PrismaClient } from "@prisma/client";
import convertHoursToMinutes from "../utils/convert-hours-to-minutes";
import convertMinutesToHours from '../utils/convert-minutes-to-hours';

interface AdsProps{
    name: string,
    yearsPlaying: number,
    discord: string,
    weekDays: string,
    hourStart: string,
    hourEnd: string,
    useVoiceChannel: boolean
}

const prisma = new PrismaClient();

export const ads = prisma.aD.findMany();

export async function buscaAdPorId(gameId: string){ 
    const data = await prisma.aD.findMany({
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
    });

    const dataFormatada = data
        .map(ad => {
            return {
                ...ad,
                weekDays: ad.weekDays.split(','),
                hourStart: convertMinutesToHours(ad.hourStart),
                hourEnd: convertMinutesToHours(ad.hourEnd)
            }});

    return dataFormatada;
};

export function buscaDiscordPorId(id: string){
    return prisma.aD.findUniqueOrThrow({
        select:{
            discord: true
        },
        where:{
            id
        }
    })
}

export async function createAds(gameId:string, body: AdsProps){
    const ad = await prisma.aD.create({
        data: {
            gameId,
            name: body.name,
            yearsPlaying: body.yearsPlaying,
            discord: body.discord,
            weekDays: body.weekDays,
            hourStart: convertHoursToMinutes(body.hourStart),
            hourEnd: convertHoursToMinutes(body.hourEnd),
            useVoiceChannel: body.useVoiceChannel,
        }
    });

    return ad;
}