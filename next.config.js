/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  api: {
    routes: '/api/server.js'
  },
  resolve: {
    fallback: {
      util: require.resolve("util/")
    }
}
}

module.exports = nextConfig