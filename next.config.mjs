// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       { protocol: 'https', hostname: 'i.ibb.co.com' },
//       { protocol: 'https', hostname: 'i.ibb.co' },
//       { protocol: 'https', hostname: 'www.cursor.com' },
//     ],
//   },
// }

// export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "www.cursor.com",
      },
    ],
  },
};

export default nextConfig;
