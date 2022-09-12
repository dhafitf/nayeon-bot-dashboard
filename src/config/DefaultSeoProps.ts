import type { DefaultSeoProps as DefaultSeoPropsType } from "next-seo";
import type { AdditionalRobotsProps } from "next-seo/lib/types";

export const BaseUrl = "https://bot.oncetwice.one";
export const DefaultSeoProps: DefaultSeoPropsType = {
  titleTemplate: "%s | Nayeon Bot",
  title: "Home",
  description: "Nayeon bot is a discord bot dedicated to notifying updates from TWICE, and also provides other commands.",
  canonical: BaseUrl,
  additionalMetaTags: [
    { name: "url", content: BaseUrl },
    { name: "identifier-URL", content: BaseUrl },
    { name: "shortlink", content: BaseUrl },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "keywords", content: "discord, bot, twice, instagram, update, youtube, vlive, nayeon, jeongyeon, momo, sana, jihyo, mina, dahyun, chaeyoung, tzuyu" },
    {
      name: "summary",
      content: "Nayeon bot is a discord bot dedicated to notifying updates from TWICE, and also provides other commands.",
    },
    { name: "subject", content: "Dashboard for Nayeon bot." },
    { name: "robots", content: "archive,follow,imageindex,index,odp,snippet,translate" },
    { name: "googlebot", content: "index,follow" },
    { name: "author", content: `Dhafit Farenza` },
    { name: "owner", content: `Dhafit Farenza` },
    { name: "designer", content: `Dhafit Farenza` },
    { name: "target", content: "all" },
    { name: "audience", content: "all" },
    { name: "coverage", content: "Worldwide" },
    { name: "distribution", content: "Global" },
    { name: "rating", content: "safe for kids" },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    { name: "HandheldFriendly", content: "True" },
    { name: "apple-mobile-web-app-title", content: "Nayeon bot Dashboard" },
    { name: "application-name", content: "Nayeon bot" },
    { name: "msapplication-TileColor", content: "#7289DA" },
    { name: "theme-color", content: "#7289DA" },
    { name: "revisit-after", content: "7 days" },
  ],
  openGraph: {
    title: "Nayeon bot Dashboard",
    url: BaseUrl,
    images: [
      {
        url: `${BaseUrl}/opengraph.jpg`,
        alt: "Nayeon Bot OpenGraphImage",
        width: 1024,
        height: 512,
      },
    ],
    type: "website",
    locale: "en_GB",
    site_name: "Nayeon bot",
    profile: {
      firstName: "Nayeon",
      lastName: "Bot",
      username: "Nayeon",
      gender: "female",
    },
  },
  twitter: {
    handle: "@DhafitF",
    site: "@DhafitF",
    cardType: "summary_large_image",
  },
};
export const robotBlockingPageProps: AdditionalRobotsProps = {
  nosnippet: true,
  notranslate: true,
  noimageindex: true,
  noarchive: true,
  maxSnippet: -1,
  maxImagePreview: "none",
  maxVideoPreview: -1,
};

export default DefaultSeoProps;
