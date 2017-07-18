/**
 * Created by yangjiali on 2017/7/17.
 */
const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const routes = require('./routes');
const path = require('path');
const config = require('./config');
const dbFile = require(config.DB_FILE);

const ip = config.SERVER;
const port = config.PORT;
// const dbFile = config.DB_FILE;

const router = jsonServer.router(dbFile());

server.use(jsonServer.bodyParser); // 用途不明
server.use(middlewares);

// 设置响应头
// server.use((req, res, next) => {
//     res.header('X-Hello', 'World');
//     next();
// })

// 使用自己配置的route
// server.use(jsonServer.rewriter(routes));

router.render = (req, res) => {
	res.send({
		code: 0,
		msg: 'OK',
		data: res.locals.data
	});
}

server.use("/api",router);
// server.use(router);

server.listen({
    host: ip,
    port: port
}, () => {
	console.log(JSON.stringify(jsonServer));
    console.log(`JSON Server is running at https://${ip}:${port}`)
})
