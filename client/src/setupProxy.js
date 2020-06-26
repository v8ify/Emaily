const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    ["/api", "/auth/google", "/api/*", "/api/stripe"],
    createProxyMiddleware({
      target: "http://localhost:8000",
    })
  );
};
