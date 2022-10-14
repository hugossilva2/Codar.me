import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export const create = async ctx => {
    if(!ctx.request.body.homeTeamScore && !ctx.request.body.awayTeamScore) {
        ctx.status = 400
        return
    }
    const userId = 'cl98rskl50000zzpsjkdn18i6'
    const {gameId, homeTeamScore, awayTeamScore} = ctx.request.body

    try {
        const hunch =  await prisma.hunch.upsert({
            where: {userId, gameId},
            create:{userId, gameId, homeTeamScore, awayTeamScore},
            update:{homeTeamScore, awayTeamScore}
        })
        ctx.body = hunch
        ctx.status = 200
    }catch (error){
        ctx.body = error
        ctx.status = 500
    }
}