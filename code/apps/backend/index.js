const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');

const app = new Koa();

// 跨域处理
const cors = require('koa2-cors');
app.use(cors({
    origin: (ctx) => {
        if (ctx.hostname === 'localhost') {
            return '*';
        } else {
            return false;
        }
    }
}))

// POST请求处理
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

// 静态文件服务
const staticPath = path.join(__dirname, 'public');
app.use(serve(staticPath));

// 处理前端静态页面
app.use(async (ctx, next) => {
    if (!ctx.path.startsWith('/api')) {
        ctx.type = 'html';
        ctx.body = require('fs').readFileSync(path.join(staticPath, 'index.html'), 'utf-8');
    } else {
        await next();
    }
});

// 引入路由
const routing = require('./routers/index');
routing(app)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});