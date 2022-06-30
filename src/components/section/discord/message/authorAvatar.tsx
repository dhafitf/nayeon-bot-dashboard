import Image from "next/image";
import { DiscordAuthorProps } from "~types/discord";

export default function DiscordAuthorAvatar(props: DiscordAuthorProps) {
  const { name, icon_url } = props;
  return (
    <div className="discord-author-avatar">
      <Image draggable={false} src={icon_url} alt={`${name} avatar`} width={40} height={40} objectFit="cover" objectPosition="center" className="rounded-full" />
    </div>
  );
}
