/**
 * Created by yangjiali on 2017/7/17.
 */
const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const path = require('path')
const config = require('./config');

const ip = config.SERVER;
const port = config.PORT;
const dbFile = config.DB_FILE;

const router = jsonServer.router(path.join(__dirname, dbFile));

server.use(jsonServer.bodyParser); // 用途不明
server.use(middlewares)

router.render = (req, res) => {

	res.send({
		code: 0,
		msg: 'OK',
		data: res.locals.data
	});
}

server.use("/api",router);

server.listen({
    host: ip,
    port: port
}, () => {
	console.log(JSON.stringify(jsonServer));
    console.log(`JSON Server is running at http://${ip}:${port}`);
})
