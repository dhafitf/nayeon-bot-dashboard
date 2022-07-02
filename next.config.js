/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.discordapp.com"],
  },
};

module.exports = {
  ...nextConfig,
  async redirects() {
    return [
      {
        source: "/invite",
        destination: "https://discord.com/oauth2/authorize?client_id=939369011773321336&permissions=139855326334&scope=bot%20applications.commands",
        permanent: true,
      },
      {
        source: "/support",
        destination: "https://discord.gg/pRs84TmR",
        permanent: true,
      },
    ];
  },
};
