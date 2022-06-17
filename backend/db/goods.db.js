const db = require('./db')

const generateQuery = (baseQuery, filter_by, sort_by, sort_dir) => {
	const whereString = filter_by ? `WHERE ${filter_by}` : ``
	const sortString = sort_by
		? `ORDER BY ${sort_by} ${sort_dir === 'asc' ? 'ASC' : 'DESC'}`
		: ``

	return `${baseQuery} ${whereString} ${sortString}`
}

const getGoods = async (sort_by, sort_dir, filter_by) => {
	const query = generateQuery(
		'SELECT * FROM shop_goods',
		filter_by,
		sort_by,
		sort_dir
	)

	const users = await db.query(query)

	return users
}

module.exports = {
	getGoods,
}
