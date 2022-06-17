const express = require('express')
const goodsRouter = require('./routes/goods.routes')

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use('/api', goodsRouter)

app.listen(PORT, () => console.log(`server has started on port ${PORT}`))
