/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Replace with the domain from which you want to allow images
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "image.tmdb.org", // Replace with the domain from which you want to allow images
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
