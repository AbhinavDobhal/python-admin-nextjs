/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

// const withPWA = require('next-pwa');
// // const runtimeCaching = require('next-pwa/cache');


// module.exports = withPWA({
//   experimental: {
//     esmExternals: false,
//   },

//   pwa: {
//     disable: process.env.NODE_ENV === 'development',
//     dest: 'public',
//     // runtimeCaching,
//   },

//   images: {
//     domains: [
//       'via.placeholder.com',
//       'res.cloudinary.com',
//       's3.amazonaws.com',
//       '18.141.64.26',
//       '127.0.0.1:3002',
//       'localhost',
//       'picsum.photos',
//       'lh3.googleusercontent.com',
//       'pixarlaravel.s3.ap-southeast-1.amazonaws.com',
//     ],
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
// });
