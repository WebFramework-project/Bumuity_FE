const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/auth/',
        createProxyMiddleware({
            target: 'http://127.0.0.1:8000:8000',
            changeOrigin: true,
        })
    );

    app.use(
        '/update_profile/',
        createProxyMiddleware({
            target: 'http://127.0.0.1:80009:8000',
            changeOrigin: true,
        })
    );
};