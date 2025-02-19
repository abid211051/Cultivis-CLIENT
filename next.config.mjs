/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "openweathermap.org",
        pathname: "/img/w/**",
      },
    ],
  },
};

export default nextConfig;
