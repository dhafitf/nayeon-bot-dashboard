import Image from "next/image";
import { DiscordEmbedFooterProps } from "~types/discord";

export default function DiscordEmbedFooter(props: DiscordEmbedFooterProps) {
  const { footer, timestamp } = props;
  const { text, icon_url } = footer || {};

  return (
    <div className="discord-embed-footer">
      {icon_url && (
        <div className="discord-embed-footer-icon">{icon_url && <Image src={icon_url} alt={`${text}`} objectFit="cover" width={20} height={20} className="rounded-full" />}</div>
      )}
      <span className="text-[10px]">
        {text && <span className="discord-embed-footer-text">{text}</span>}
        {text && timestamp && <span className="discord-embed-footer-separator mx-1">•</span>}
        {timestamp && <span className="discord-embed-footer-timestamp">{timestamp}</span>}
      </span>
    </div>
  );
}
