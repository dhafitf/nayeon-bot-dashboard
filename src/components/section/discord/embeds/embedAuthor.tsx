import Image from "next/image";
import { DiscordEmbedAuthorProps } from "~types/discord";

export default function DiscordEmbedAuthor(props: DiscordEmbedAuthorProps) {
  const { name, icon_url, url } = props;
  return (
    <div className="discord-embed-author">
      <Image draggable={false} src={icon_url} alt={`${name}`} width={24} height={24} objectFit="cover" objectPosition="center" className="rounded-full" />
      {url ? (
        <span className="discord-embed-author-name">
          <a href={url} target="_blank" rel="nofollow noopener noreferrer">
            {name}
          </a>
        </span>
      ) : (
        <span className="discord-embed-author-name">{name}</span>
      )}
    </div>
  );
}
