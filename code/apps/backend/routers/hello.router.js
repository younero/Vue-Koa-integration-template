const Router = require('koa-router')
const router = new Router()

const HelloController = require('../controllers/hello.controller')

router.prefix('/hello')

router.post('/', HelloController.post)
router.get('/', HelloController.get)
router.delete('/:id', HelloController.delete)
router.put('/:id', HelloController.update)

module.exports = router