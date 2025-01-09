const Router = require('koa-router')
const router = new Router()

const handler = require('../controllers/helloWorld/index')

router.prefix('/hello-world')

router.get('/', async (ctx, next) => {
    ctx.body = handler.get()
})

module.exports = router