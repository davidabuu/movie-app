/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env: {
    apiUrl: 'http://www.omdbapi.com/?i=tt3896198&apikey=f9a73e1&type=movie',
  },
}
