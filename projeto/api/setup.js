import Koa from 'koa'
import { router } from './router.js'
import bobyparser from 'koa-bodyparser'
import cors from '@koa/cors'


export const app = new Koa()

app.use(cors())
app.use(bobyparser())
app.use(router.routes())
app.use(router.allowedMethods())