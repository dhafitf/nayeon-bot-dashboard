import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.discordapp.com"],
  },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

export default withMDX({
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
      {
        source: "/docs",
        destination: "/docs/quickstart",
        permanent: false,
      },
      {
        source: "/changelog",
        destination: "/changelog/discord-bot",
        permanent: false,
      },
    ];
  },
});
