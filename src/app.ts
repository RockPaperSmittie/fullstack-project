const Koa = require('koa');

const port = process.env.PORT || 4200
const app = new Koa();

app.use(async ctx => {
    ctx.body = 'Hello from KOA'
})


app.listen(port, () => {
    console.log(`Server is running on ${port}`)
});

app.on('error', err => {
  console.log('server error', err)
});