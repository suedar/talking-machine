const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: 'http://api.qingyunke.com/api.php',
      changeOrigin: true,
      pathRewrite:{
        '^/api': '/api'
      }
    })
  );
};