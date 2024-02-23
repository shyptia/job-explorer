/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: () => [
    {
      source: "/",
      destination: "/jobs",
      permanent: false,
    },
  ],
};

export default nextConfig;
