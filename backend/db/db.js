const Pool = require('pg').Pool
const pool = new Pool({
	user: 'table_watcher',
	password: '1234',
	host: 'localhost',
	port: 5432,
	database: 'table_test',
})

module.exports = pool
