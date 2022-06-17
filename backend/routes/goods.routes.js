const Router = require('express')
const { getGoods } = require('../controller/goods.controller')

const router = new Router()

router.get('/goods', getGoods)

module.exports = router
