import Router from '@koa/router'

export const router = new Router()

router.get("/", async ctx => {
    ctx.body = { Ola: "Mundo"}
})

router.post("/users", async ctx => {
    ctx.body = { Ola: "Povo"}
})