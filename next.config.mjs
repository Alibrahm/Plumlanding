/** @type {import('next').NextConfig} */
  // next.config.mjs
  const nextConfig = {
    async redirects() {
      return [
        {
          source: "/",
          destination: "/homepage/",
          permanent: true,
        },
      ];
    },
    images: {
      domains: ["s3-alpha-sig.figma.com", "www.color-meanings.com"],
    },
  };

export default nextConfig;
