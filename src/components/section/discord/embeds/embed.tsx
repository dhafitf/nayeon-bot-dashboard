import Image from "next/image";
import { DiscordEmbedProps } from "~types/discord";
import { DiscordEmbedAuthor, DiscordEmbedFields, DiscordEmbedTitle, DiscordEmbedFooter } from "./";
import { DiscordMessageImage } from "../message";

export default function DiscordEmbed(props: DiscordEmbedProps) {
  const { color, title, url, thumbnail, image, description, author, fields, footer, timestamp } = props;
  const embedColor = color || "#7289da";
  return (
    <div className="discord-embed">
      <div className="discord-embed-color" style={{ backgroundColor: `${embedColor}` }}></div>
      <div className="discord-embed-container">
        <div className="discord-embed-grid">
          {author && <DiscordEmbedAuthor {...author} />}
          {title && <DiscordEmbedTitle title={title} url={url} />}
          {description && <div className="discord-embed-description" dangerouslySetInnerHTML={{ __html: description }} />}
          {fields && <DiscordEmbedFields fields={fields} />}
        </div>
        {thumbnail && (
          <div className="discord-embed-thumbnail">
            <Image draggable={false} src={thumbnail.url} width={80} height={80} alt="thumbnail" objectFit="cover" />
          </div>
        )}
        {image && <DiscordMessageImage url={image.url} />}
        {footer || (timestamp && <DiscordEmbedFooter footer={footer} timestamp={timestamp} />)}
      </div>
    </div>
  );
}
