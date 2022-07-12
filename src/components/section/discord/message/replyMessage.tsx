import Image from "next/image";
import clsx from "~utils/clsx";
import VerifiedTag from "../verifiedTag";
import { DiscordReplyMessageProps } from "~types/discord";

export default function DiscordReplyMessage({ name, icon_url, color, isBot, isSlashCommand, content }: DiscordReplyMessageProps) {
  const nickColor = color ? { color: color } : {};
  const avatar = icon_url ? icon_url : "https://cdn.discordapp.com/attachments/946644664134533161/994533593856614451/unknown.png";
  return (
    <div className="discord-reply-content">
      <Image draggable={false} src={avatar} alt={`${name} avatar`} width={16} height={16} objectFit="cover" objectPosition="center" className="rounded-full" />
      {isBot && (
        <span className="discord-author-bot text-white">
          <VerifiedTag />
          <span className="leading-[.9375rem]">BOT</span>
        </span>
      )}
      <span style={nickColor}>{name}</span>
      {isSlashCommand && " used "}
      <div className={clsx(isSlashCommand ? "cursor-pointer text-anchor-blue hover:underline" : "text-[#7c818b]")}>
        <span>{isSlashCommand ? `/${content}` : `${content}`}</span>
      </div>
    </div>
  );
}
