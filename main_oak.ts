import { Application, Router } from "https://deno.land/x/oak/mod.ts";

import index  from "./images/index.json" assert { type: "json" }

const router = new Router()
const app = new Application();

router.get("/api/images",(ctx, _next)=>{
    ctx.response.body = index;
})

router.get("/images/:id", async (ctx)=>{
    console.log(`${Deno.cwd()}/images`)
    console.log(`${ctx.params.id}`)
    await ctx.send({
        root: `${Deno.cwd()}`
    })
})


app.use(router.routes());

const portString = Deno.env.get('PORT')
let portn:number;

if(portString == undefined) portn = 8000;
else portn = parseInt(portString)

await app.listen({ port: portn});
