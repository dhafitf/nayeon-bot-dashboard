import DiscordMessage from "@section/discord/discordMessage";
import Links from "@other/links";
import { FaChartBar, FaPaperPlane } from "react-icons/fa";
import { socmedFeatureMessage, transtaleFeatureMessage } from "~utils/lib/featureMessageData";
import { IoLogoGameControllerB } from "react-icons/io";

const upcomingFeatures = [
  {
    icon: <FaPaperPlane />,
    title: "Auto Responder",
    description: "Make chatting more fun and easy with auto responder.",
  },
  {
    icon: <FaChartBar />,
    title: "Leveling System",
    description: "Leveling system to make servers more active and increase user engagement.",
  },
  {
    icon: <IoLogoGameControllerB />,
    title: "Games",
    description: "Join support server to suggest what game you want to play.",
  },
];

export default function FeatureSection() {
  return (
    <div id="features" className="pb-8">
      <div className="flex gap-8 md:flex-row-reverse max-md:flex-col">
        <div className="flex-1 md:flex md:flex-col md:justify-center">
          <h2 className="text-3xl font-bold max-md:text-center">Socmed Update</h2>
          <p className="pt-6 max-md:text-center">Nayeon bot will notify available updates from TWICE, now includes updates from: </p>
          <ul className="list-disc py-4 px-6 pl-4">
            <li>Instagram</li>
            <li>VLive</li>
            <li>Youtube</li>
            <li>Tiktok</li>
          </ul>
          <div className="max-md:text-center">
            <Links className="text-light-blue hover:underline" text="Read More" href="/docs/socmed" />
          </div>
        </div>
        <div className="scrollbar max-h-[500px] flex-1 overflow-auto">
          <DiscordMessage message={socmedFeatureMessage} />
        </div>
      </div>
      <div className="my-10 mx-5 h-[2px] max-w-[1440px] rounded bg-[#4E4F50] xl:mx-auto"></div>
      <div className="flex gap-8 md:flex-row max-md:flex-col">
        <div className="flex-1 md:flex md:flex-col md:justify-center">
          <h2 className="text-3xl font-bold max-md:text-center">Translator</h2>
          <p className="pt-6 pb-4 max-md:text-center">
            Nayeon bot can translate the sentence or word you ask. You can set the text to be translated to a language with{" "}
            <code className="whitespace-nowrap rounded bg-[#4c4f54] px-1">?[lang]</code>. <span className="text-sm italic">(The default language is English)</span>
          </p>
          <div className="max-md:text-center">
            <Links className="text-light-blue hover:underline" text="Read More" href="/docs/translator" />
          </div>
        </div>
        <div className="scrollbar max-h-[500px] flex-1 overflow-auto">
          <DiscordMessage message={transtaleFeatureMessage} />
        </div>
      </div>
      <div className="my-10 mx-5 h-[2px] max-w-[1440px] rounded bg-[#4E4F50] xl:mx-auto"></div>
      <div className="flex flex-col items-center">
        <h2 className="pb-6 text-center text-3xl font-bold">Upcoming update</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {upcomingFeatures.map(({ icon, title, description }, index) => {
            return (
              <div key={index} className="flex max-w-md flex-col items-center gap-2 rounded-md bg-[#3c4146] p-6">
                <span className="text-6xl">{icon}</span>
                <span className="text-lg font-bold">{title}</span>
                <div className="text-center text-sm">{description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
