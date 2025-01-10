const Hello = require('../services/hello.service')

class Controller {
    async post(ctx, next) {
        ctx.body = await Hello.create(ctx.request.body.name)
    }
    async get(ctx, next) {
        ctx.body = await Hello.list()
    }
    async update(ctx, next) {
        ctx.body = await Hello.update(ctx.params.id, ctx.request.body.name)
    }
    async delete(ctx, next) {
        ctx.body = await Hello.delete(ctx.params.id)
    }
}

module.exports = new Controller()