const { getGoods: getGoodsDB } = require('../db/goods.db')

const getGoods = async (req, res) => {
	const { sort_by = '', sort_dir = 'asc', filter_by = '' } = req.query

	const goods = await getGoodsDB(sort_by, sort_dir, filter_by)
	res.json(goods.rows)
}

module.exports = {
	getGoods,
}
