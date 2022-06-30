import { DiscordEmbedTitleProps } from "~types/discord";

export default function DiscordEmbedTitle(props: DiscordEmbedTitleProps) {
  const { title, url } = props;
  return (
    <div className="discord-embed-title">
      {url ? (
        <a href={url} target="_blank" rel="nofollow noopener noreferrer">
          {title}
        </a>
      ) : (
        <div>{title}</div>
      )}
    </div>
  );
}
