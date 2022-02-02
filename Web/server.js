import express from "express";
import next from "next";
import { createProxyMiddleware } from "http-proxy-middleware";
const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV === "development";
const app = next({ dev });
const handle = app.getRequestHandler();
const apiPaths = {
  "/api": {
    target: "http://127.0.0.1:3001",
    pathRewrite: {
      "^/api": "/api",
    },
    changeOrigin: true,
  },
};
app
  .prepare()
  .then(() => {
    const server = express();
    if (dev) {
      server.use("/api", createProxyMiddleware(apiPaths["/api"]));
    }
    server.all("*", (req, res) => {
      return handle(req, res);
    });
    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("Error:::::", err);
  });
