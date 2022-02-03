module.exports = {
  async rewrites() {
    if (process.env.NODE_ENV !== "production") {
      return [
        {
          destination: "http://127.0.0.1:3001/:path*", // Proxy to Backend
          source: "/api/:path*",
        },
      ];
    }
  },
};
