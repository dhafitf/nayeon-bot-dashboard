import { DiscordImageProps } from "~types/discord";
import clsx from "~utils/clsx";

export default function DiscordMessageImage(props: DiscordImageProps) {
  const { url, isEmbed } = props;
  return (
    <div className={clsx("discord-message-image", isEmbed && "embed-image")}>
      <img className="max-h-[300px] w-full max-w-[432px] rounded object-cover object-center" src={url} alt="embed-image" />
    </div>
  );
}
